// const toggleBtn = document.querySelector('.toggle_btn')
//     const toggleBtnIcon = document.querySelector('.toggle_btn span')
//     const dropDownMenu = document.querySelector('.dropdown_menu')

//     toggleBtnIcon.onclick = function(){
//         dropDownMenu.classList.toggle('open')
//         const isOpen = dropDownMenu.classList.contains('open')

//         // toggleBtnIcon.classList = isOpen
//         // ? ''
//         // : 'bars'
//     }

toggleBtnIcon = document.querySelector('.toggle_btn span');
toggleBtnIcon.onclick = function(){
        dropDownMenu = document.querySelector('.dropdown_menu')
        dropDownMenu.classList.toggle('open')
    }
