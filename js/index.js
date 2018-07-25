$(document).ready(function () {
    let theme = $("#style");
    let currentThemeConstant = 'ct';
    let currentThemeValue = localStorage.getItem(currentThemeConstant);
    let nameConst = 'name';
    let currentUserName = localStorage.getItem(nameConst);
    let spanName = $('#about-us #user-name span');
    console.log(name);
    if (currentThemeValue != null) {
        theme.attr('href', chageTheme(currentThemeValue));
    }
    if (currentUserName != null) {
        spanName.html(currentUserName)
    }
    /*(window.location.indexOf('name of the file'))>-1*/

    $('.slider').bxSlider({
        auto: true,
        mode: 'fade',
        pager: false,
        captions: true,
        slideWidth: 1200
    });

    /*post*/
    let posts = [
        {
            title: 'Test 1',
            realseDate: 'Creado el día ' + moment().format("dddd") + ' ' + moment().format('DD') + ' ' + moment().format("MMMM") + ' del ' + moment().format('YYYY'),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus nisi, scelerisque eget ipsum sit amet, ultricies molestie orci. Pellentesque consectetur dolor imperdiet, aliquet risus at, vestibulum nulla. Nullam diam purus, ultricies at dui et, pulvinar dignissim erat. Duis gravida at mi nec dapibus. Vivamus at odio vel sapien laoreet vehicula et id ex. Praesent ornare convallis enim, ac elementum orci sagittis in. Duis viverra est sed dignissim scelerisque. Etiam eu venenatis purus.\n' +
            '\n' +
            '                            Ut in suscipit est. Morbi a fermentum leo. Sed id elit nec sapien faucibus interdum. Proin consectetur, est vitae viverra vehicula, ex nisl rutrum odio, at scelerisque magna dui tempus nunc. Sed augue felis, lobortis non est sit amet, convallis gravida orci. Praesent rutrum nec lacus sit amet finibus. Cras hendrerit elementum lorem, ac luctus urna interdum eget.'
        },
        {
            title: 'Test 2',
            realseDate: 'Creado el día ' + moment().format("dddd") + ' ' + moment().format('DD') + ' ' + moment().format("MMMM") + ' del ' + moment().format('YYYY'),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus nisi, scelerisque eget ipsum sit amet, ultricies molestie orci. Pellentesque consectetur dolor imperdiet, aliquet risus at, vestibulum nulla. Nullam diam purus, ultricies at dui et, pulvinar dignissim erat. Duis gravida at mi nec dapibus. Vivamus at odio vel sapien laoreet vehicula et id ex. Praesent ornare convallis enim, ac elementum orci sagittis in. Duis viverra est sed dignissim scelerisque. Etiam eu venenatis purus.\n' +
            '\n' +
            '                            Ut in suscipit est. Morbi a fermentum leo. Sed id elit nec sapien faucibus interdum. Proin consectetur, est vitae viverra vehicula, ex nisl rutrum odio, at scelerisque magna dui tempus nunc. Sed augue felis, lobortis non est sit amet, convallis gravida orci. Praesent rutrum nec lacus sit amet finibus. Cras hendrerit elementum lorem, ac luctus urna interdum eget.'
        },
        {
            title: 'Test 3',
            realseDate: 'Creado el día ' + moment().format("dddd") + ' ' + moment().format('DD') + ' ' + moment().format("MMMM") + ' del ' + moment().format('YYYY'),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus nisi, scelerisque eget ipsum sit amet, ultricies molestie orci. Pellentesque consectetur dolor imperdiet, aliquet risus at, vestibulum nulla. Nullam diam purus, ultricies at dui et, pulvinar dignissim erat. Duis gravida at mi nec dapibus. Vivamus at odio vel sapien laoreet vehicula et id ex. Praesent ornare convallis enim, ac elementum orci sagittis in. Duis viverra est sed dignissim scelerisque. Etiam eu venenatis purus.\n' +
            '\n' +
            '                            Ut in suscipit est. Morbi a fermentum leo. Sed id elit nec sapien faucibus interdum. Proin consectetur, est vitae viverra vehicula, ex nisl rutrum odio, at scelerisque magna dui tempus nunc. Sed augue felis, lobortis non est sit amet, convallis gravida orci. Praesent rutrum nec lacus sit amet finibus. Cras hendrerit elementum lorem, ac luctus urna interdum eget.'
        },
    ];
    posts.forEach((item, index) => {
        let post = `
            <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.realseDate}</span>
                        <p>
                            ${item.body}                           
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
        `;
        console.log(post);
        $('#posts').append(post);
    });


    function chageTheme(type) {
        switch (type) {
            case 'green':
                return 'css/green.css';
            case 'red':
                return 'css/red.css';
            case 'blue':
                return 'css/blue.css';
        }
    }

    /*selector de temas*/
    $('#green').click(function () {
        theme.attr('href', chageTheme('green'));
        localStorage.setItem(currentThemeConstant, 'green');
    });
    $('#red').click(function () {
        theme.attr('href', chageTheme('red'));
        localStorage.setItem(currentThemeConstant, 'red');
    });
    $('#blue').click(function () {
        theme.attr('href', chageTheme('blue'));
        localStorage.setItem(currentThemeConstant, 'blue');
    });

    /*Scroll ESTO ME VA A AYUDAR MUCHOOOOOOO*/
    $('.up').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#login').submit(function (e) {
        e.preventDefault();
        let name = $('#name');
        localStorage.setItem(nameConst, name.val());
        spanName.html(name.val());
        name.val("")
    });

});