document.addEventListener('DOMContentLoaded', (event) => {
    // Получаем модальное окно
    var modal = document.getElementById('myModal');
    // Получаем кнопку, которая открывает модальное окно
    var btn = document.querySelector('.account-button');
    // Получаем элемент <span>, который закрывает модальное окно
    var span = document.getElementsByClassName('close')[0];
  
    // Когда пользователь нажимает на кнопку, откройте модальное окно
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // Когда пользователь нажимает на <span> (x), закройте модальное окно
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // Когда пользователь нажимает в любом месте за пределами модального окна, закройте его
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
  function openTab(evt, tabName) {
    // Объявляем переменные
    var i, tabcontent, tablinks;
  
    // Получаем все элементы с class="tabcontent" и скрываем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Получаем все элементы с class="tablinks" и удаляем класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Показываем текущую вкладку и добавляем класс "active" кнопке, которая открыла вкладку
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }