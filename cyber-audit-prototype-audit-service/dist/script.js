document.addEventListener('DOMContentLoaded', () => {
    const forms = [
        {formId: 'quote-form-header', successId: 'quote-success-header'},
        {formId: 'hero-form', successId: 'hero-success'},
        {formId: 'services-quote-form', successId: 'services-quote-success'},
        {formId: 'sidebar-form', successId: 'sidebar-success'}
    ];

    forms.forEach(item => {
        const form = document.getElementById(item.formId);
        const success = document.getElementById(item.successId);
        if(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                form.style.display = 'none';
                success.style.display = 'block';
            });
        }
    });
});