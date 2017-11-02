$(document).ready(() => {
    const button: JQuery<HTMLButtonElement> = $('#button') as JQuery<HTMLButtonElement>;
    const input: JQuery<HTMLInputElement> = $('#input') as JQuery<HTMLInputElement>;

    button.click(() => {
        alert(input.val());
    })
});
