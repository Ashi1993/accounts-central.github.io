$(function () {
    $("a:not([role=main-action])").click(function (e) {
        e.preventDefault();
    });

    if ($('html').hasClass('bank')) {
        var citizenBank = {
            title: "MCB Open Banking Solution",
            footer: "MCB",
            style: "css/citizenbank.css",
            logo: "img/mcb.jpg"
        },
            eudcBank = {
                title: "EUDC Bank Open Banking Solution",
                footer: "EUDC Bank",
                style: "css/eudcbank.css",
                logo: "img/eudc_bank_logo.png"
            };

        function updateStyles(bank, bankId) {
            $('a[role=main-action]').each(function () {
                $(this).attr('href', ($(this).attr('href') + '?bank=' + bankId));
            });
            $("img.logo").attr("src", bank.logo);
            $('title').html(bank.title);
            $('footer span.bank-name').html(bank.footer);
            $('link#bootstrap').prop('disabled', false);
            $("link#theme").attr("href", bank.style);
        }

        if (location.search) {
            var style = location.search.replace("?", "").split("=");
            (style[0] === "bank" && parseInt(style[1]) === 2) ? updateStyles(eudcBank, 2) : updateStyles(citizenBank, 1);
        }
        else {
            updateStyles(citizenBank, 1);
        }
    }
});