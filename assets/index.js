function render() {
    const md = window.markdownit({
        linkify: true,
        highlight: function (str, lang) {
            if (lang && window.hljs.getLanguage(lang)) {
                try {
                    return window.hljs.highlight(lang, str).value;
                } catch (__) { }
            }
            return '';
        }
    });
    const text = document.querySelector('.note-input').value;
    const html = md.render(text);
    document.querySelector('.note-output').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', render);