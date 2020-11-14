window.addEventListener('load', function(){

    const addList = document.querySelector('#add');
    const  profileList= document.querySelector('#profile');

    const humberToggle = document.querySelector('.navigation-md-menu');
    const mdMenu = document.querySelector('.navigation-md');

    document.addEventListener('click', function(e){
        e.preventDefault();

        addList.classList.remove('show');
        profileList.classList.remove('show');

        if(e.target.dataset.filter == 'profileList'){
            profileList.classList.toggle('show');

        }

        if(e.target.dataset.filter == 'addList'){
            addList.classList.toggle('show');
        }
    });

    humberToggle.addEventListener('click', function(e){
        e.preventDefault();

        mdMenu.classList.toggle('show');
    })
    

})