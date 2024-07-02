var url = '../books/106838200.pdf';
var doc = null,
    page_number = 1,
    is_rendering = false,
    expected_page = null,
    scale = 10,
    canvas = document.getElementById("page"),
    ctx = canvas.getContext("2d");

pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    doc = pdfDoc_;
    document.getElementById("page-num").textContent = doc.numPages;
    showPage(page_number);
});
function showPage(num) {
    is_rendering = true;
    doc.getPage(num).then(function(page) {
        var viewport = page.getViewport({scale: scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var context = {
            canvasContext: ctx,
            viewport: viewport
        };
        var task = page.render(context);
        task.promise.then(function() {
            is_rendering = false;
            if (expected_page !== null) {
                showPage(expected_page);
                expected_page = null;
            }
        });
    });
    document.getElementById("page-num").textContent = num;
}

document.getElementById("prev").addEventListener("click", onPrevPage);
document.getElementById("next").addEventListener("click", onNextPage);

function onPrevPage() {
    if (page_number <= 1) {
        return;
    }
    page_number--;
    addToQueue(page_number);
    window.scrollTo(0, 0);
}
function onNextPage() {
    if (page_number >= doc.numPages) {
        return;
    }
    page_number++;
    addToQueue(page_number);
    window.scrollTo(0, 0);
}

function addToQueue(num) {
    if (is_rendering) {
        expected_page = num;
    } else {
        showPage(num);
    }
}