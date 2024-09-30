$(document).ready(function () {
    Accessibilityinit();
});
const OpenAccessibilityWidget = obj => {
    $(obj).hide();
    $('#accessibility_widget_box').show().addClass('active');
    $("body").append("<div class='accessibility_widget_backdrop' onclick='CloseAccessibilityWidget()'></div>");
    $("html").addClass('opened_Accessibility_Menu')
    this.showbutton();
};
const CloseAccessibilityWidget = () => {
    $('#accessibility_widget_box').hide().removeClass('active');
    $('#ssAccessibilityIcon').show();
    $(".accessibility_widget_backdrop").remove();
    $("html").removeClass('opened_Accessibility_Menu')

    const selectedItemLength = $('#accessibility_widget_box .accessibility_widget_btn.active').length;
    if (selectedItemLength >= 1) {
        $('#ssAccessibilityIcon').addClass('active');
    } else {
        $('#ssAccessibilityIcon').removeClass('active');
    }

};
const AccessibilityHideImg = (Value, ID, isCkexist) => {
    if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('active')) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('active');
        $('html').removeClass('Accessibility_Hide_Img');
        this.deleteCookie('ahimg');
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        $('html').addClass('Accessibility_Hide_Img');
        if (!isCkexist) {
            this.setCookie('ahimg', ID, 5);
        }
    }

    if (Value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $('html').removeClass('Accessibility_Hide_Img');
        this.deleteCookie('ahimg');
    }
};

const AccessibilityHighlightLink = (Value, ID, isCkexist) => {
    if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('active')) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('active');
        $('html').removeClass('Accessibility_Highlight_Link');
        this.deleteCookie('ahlink');
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        $('html').addClass('Accessibility_Highlight_Link');
        if (!isCkexist) {
            this.setCookie('ahlink', ID, 5);
        }
    }

    if (Value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $('html').removeClass('Accessibility_Highlight_Link');
        this.deleteCookie('ahlink');
    }
};

const PageHtmlElement = $('.site-content, .site-header, .site-footer, #kt_aside, #kt_wrapper, #kt_content, #kt_footer')
let AccessibilityTextStepCount = 1;
const AccessibilityTextSize = (Value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilityTextStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('Large active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-bigger-text-2')
        PageHtmlElement.css({ 'zoom': '1.1' })

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextStepCount})`).addClass('active')
        AccessibilityTextStepCount++

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('Large') || level == 2) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('Large').addClass('Larger');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-bigger-text-3')
        PageHtmlElement.css({ 'zoom': '1.2' })

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextStepCount})`).addClass('active')
        AccessibilityTextStepCount++

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('Larger') || level == 3) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('Larger').addClass('Largest');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-bigger-text-4')
        PageHtmlElement.css({ 'zoom': '1.3' });

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextStepCount})`).addClass('active')
        AccessibilityTextStepCount++


    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('Largest') || level == 4) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('Largest').addClass('Extra-Largest');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-bigger-text-5')
        PageHtmlElement.css({ 'zoom': '1.5' });
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextStepCount})`).addClass('active')
        AccessibilityTextStepCount++
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('Extra-Largest active');
        PageHtmlElement.css({ 'zoom': '1' });

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-bigger-text-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityTextStepCount = 1;
        this.deleteCookie('atextsize');
    }
    if (AccessibilityTextStepCount > 1 && !isCkexist) {
        this.setCookie('atextsize', ID + "~" + (AccessibilityTextStepCount - 1), 5);
    }
    if (Value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        PageHtmlElement.css({ 'zoom': '1' });

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-bigger-text-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityTextStepCount = 1;
        this.deleteCookie('atextsize');
    }
};


let AccessibilityTextAlignStepCount = 1;
const AccessibilityTextAlign = (value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilityTextAlignStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('text-left active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Align Left');

        $('html').attr('data-Accessibility-text-align', 'left')

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextAlignStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-text-align-2')
        AccessibilityTextAlignStepCount++

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('text-left') || level == 2) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('text-left').addClass('text-right');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Align Right');

        $('html').attr('data-Accessibility-text-align', 'right')

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextAlignStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-text-align-3')
        AccessibilityTextAlignStepCount++

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('text-right') || level == 3) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('text-right').addClass('text-center');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Align Center');
        $('html').attr('data-Accessibility-text-align', 'center')

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextAlignStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-text-align-4')
        AccessibilityTextAlignStepCount++

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('text-center') || level == 4) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('text-center').addClass('text-justify');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Align justify');

        $('html').attr('data-Accessibility-text-align', 'justify')


        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextAlignStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-text-align-5')
        AccessibilityTextAlignStepCount++
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('text-justify active');
        $('html').removeAttr('data-Accessibility-text-align')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Text Align');


        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-text-align-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityTextAlignStepCount = 1;
        this.deleteCookie('atextalign');
    }
    if (AccessibilityTextAlignStepCount > 1 && !isCkexist) {
        this.setCookie('atextalign', ID + "~" + (AccessibilityTextAlignStepCount - 1), 5);
    }
    if (value == 'Reset') {
        $(`#${ID}`).removeClass();
        $(`#${ID}`).addClass('accessibility_widget_btn');
        $('html').removeAttr('data-Accessibility-text-align')
        $(`#${ID}`).find('.accessibility_widget_btn__name').text('Text Align');


        $(`#${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`#${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-text-align-1')
        $(`#${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityTextAlignStepCount = 1;
        this.deleteCookie('atextalign');
    }
};

let AccessibilityContrastStepCount = 1;
const AccessibilityContrast = (value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilityContrastStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('invert_Colors active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Invert Colors');


        $('html').attr('data-Accessibility-Contrast', 'Invert_Colors')


        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityContrastStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-contrast-2')
        AccessibilityContrastStepCount++


    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('invert_Colors') || level == 2) {
        $('html').attr('data-Accessibility-Contrast', 'Dark-Contrast')

        $(`.accessibility_widget_uwaw #${ID}`).removeClass('invert_Colors').addClass('Dark-Contrast');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Dark Contrast');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityContrastStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-contrast-3')
        AccessibilityContrastStepCount++


    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('Dark-Contrast') || level == 3) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('Dark-Contrast').addClass('Light-Contrast');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Light Contrast');


        $('html').attr('data-Accessibility-Contrast', 'Light-Contrast')


        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityContrastStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-contrast-4')
        AccessibilityContrastStepCount++

    } else {

        $(`.accessibility_widget_uwaw #${ID}`).removeClass('active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Contrast +');

        $('html').removeAttr('data-Accessibility-Contrast')

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-contrast-plus')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityContrastStepCount = 1;
        this.deleteCookie('acontrast');
    }
    if (AccessibilityContrastStepCount > 1 && !isCkexist) {
        this.setCookie('acontrast', ID + "~" + (AccessibilityContrastStepCount - 1), 5);
    }
    if (value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Contrast +');

        $('html').removeAttr('data-Accessibility-Contrast')

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-contrast-plus')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityContrastStepCount = 1;
        this.deleteCookie('acontrast');
    }
};

let AccessibilitySaturationStepCount = 1;
const AccessibilitySaturation = (value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilitySaturationStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('low-saturation active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Low Saturation');
        $('html').css({ 'filter': 'saturate(0.5)' })

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilitySaturationStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-saturation-2')
        AccessibilitySaturationStepCount++

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('low-saturation') || level == 2) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('low-saturation').addClass('High-Saturation');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('High Saturation');
        $('html').css({ 'filter': 'saturate(3)' })

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilitySaturationStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-saturation-3')
        AccessibilitySaturationStepCount++


    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('High-Saturation') || level == 3) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('High-Saturation').addClass('Desaturate');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Desaturate');
        $('html').css({ 'filter': 'saturate(0)' })

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilitySaturationStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-saturation-4')
        AccessibilitySaturationStepCount++

    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('High-Saturation active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Saturation');
        $('html').css({ 'filter': '' })


        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-saturation-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilitySaturationStepCount = 1;
        this.deleteCookie('asaturation');
    }
    if (AccessibilitySaturationStepCount > 1 && !isCkexist) {
        this.setCookie('asaturation', ID + "~" + (AccessibilitySaturationStepCount - 1), 5);
    }
    if (value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Saturation');
        $('html').css({ 'filter': '' })

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-saturation-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilitySaturationStepCount = 1;
        this.deleteCookie('asaturation');
    }
};

let AccessibilityChangeFontStepCount = 1;
const AccessibilityChangeFont = (value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilityChangeFontStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('dyslexia_friendly active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Dyslexia Friendly');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityChangeFontStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-font-1')
        AccessibilityChangeFontStepCount++

        $('html').attr('data-Accessibility-Font', 'dyslexia_friendly')

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('dyslexia_friendly') || level == 2) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('dyslexia_friendly').addClass('legible_fonts');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Legible Fonts');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityChangeFontStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-font-3')
        AccessibilityChangeFontStepCount++
        $('html').attr('data-Accessibility-Font', 'legible_fonts')

    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('legible_fonts active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Dyslexia Friendly');
        $('html').removeAttr('data-Accessibility-Font');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon icon-font-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityChangeFontStepCount = 1;
        this.deleteCookie('atextfont');
    }
    if (AccessibilityChangeFontStepCount > 1 && !isCkexist) {
        this.setCookie('atextfont', ID + "~" + (AccessibilityChangeFontStepCount - 1), 5);
    }
    if (value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Dyslexia Friendly');
        $('html').removeAttr('data-Accessibility-Font');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon icon-font-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityChangeFontStepCount = 1;
        this.deleteCookie('atextfont');
    }
}

let AccessibilityTextSpacingStepCount = 1;
const AccessibilityTextSpacing = (value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilityTextSpacingStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('light_spacing active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Light Spacing');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextSpacingStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-spacing-2')
        AccessibilityTextSpacingStepCount++

        $('html').attr('data-Accessibility-Text-Spacing', 'light_spacing')

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('light_spacing') || level == 2) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('light_spacing').addClass('moderate_spacing');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Moderate Spacing');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextSpacingStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-spacing-3')
        AccessibilityTextSpacingStepCount++
        $('html').attr('data-Accessibility-Text-Spacing', 'moderate_spacing')

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('moderate_spacing') || level == 3) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('moderate_spacing').addClass('Heavy_spacing');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Heavy Spacing');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityTextSpacingStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-spacing-4')
        AccessibilityTextSpacingStepCount++
        $('html').attr('data-Accessibility-Text-Spacing', 'Heavy_spacing')

    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('Heavy_spacing active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Text Spacing');
        $('html').removeAttr('data-Accessibility-Text-Spacing');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-spacing-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityTextSpacingStepCount = 1;
        this.deleteCookie('atextspacing');
    }
    if (AccessibilityTextSpacingStepCount > 1 && !isCkexist) {
        this.setCookie('atextspacing', ID + "~" + (AccessibilityTextSpacingStepCount - 1), 5);
    }
    if (value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Text Spacing');
        $('html').removeAttr('data-Accessibility-Text-Spacing');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-spacing-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityTextSpacingStepCount = 1;
        this.deleteCookie('atextspacing');
    }
}
let AccessibilityLineHeightStepCount = 1;
const AccessibilityLineHeight = (value, ID, isCkexist, level) => {
    if (!level) {
        level = -1
    }
    else {
        AccessibilityLineHeightStepCount = level
    }
    if (level > -1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        for (var i = 1; i < level; i++) {
            $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${i})`).addClass('active')
        }
    }
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active') || level == 1) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('line_height_1_5 active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Line Height (1.5x)');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityLineHeightStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-line-height-2')
        AccessibilityLineHeightStepCount++

        $('html').attr('data-Accessibility-line-height', 'line_height_1_5')

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('line_height_1_5') || level == 2) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('line_height_1_5').addClass('line_height_1_75');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Line Height (1.75x)');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityLineHeightStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-line-height-3')
        AccessibilityLineHeightStepCount++
        $('html').attr('data-Accessibility-line-height', 'line_height_1_75')

    } else if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('line_height_1_75') || level == 3) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('line_height_1_75').addClass('line_height_2');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Line Height (2x)');

        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step:nth-child(${AccessibilityLineHeightStepCount})`).addClass('active')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-line-height-4')
        AccessibilityLineHeightStepCount++
        $('html').attr('data-Accessibility-line-height', 'line_height_2')
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('line_height_2 active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Line Height');
        $('html').removeAttr('data-Accessibility-line-height');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-line-height-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityLineHeightStepCount = 1;
        this.deleteCookie('alineheight');
    }
    if (AccessibilityLineHeightStepCount > 1 && !isCkexist) {
        this.setCookie('alineheight', ID + "~" + (AccessibilityLineHeightStepCount - 1), 5);
    }
    if (value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Line Height');
        $('html').removeAttr('data-Accessibility-line-height');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-line-height-1')
        $(`.accessibility_widget_uwaw #${ID}`).find(`.accessibility-features__item__steps .accessibility-features__step`).removeClass('active')
        AccessibilityLineHeightStepCount = 1;
        this.deleteCookie('alineheight');
    }
}


const AccessibilityCursorSize = (value, ID, isCkexist) => {
    if (!$(`.accessibility_widget_uwaw #${ID}`).hasClass('active')) {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('big_Cursor active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Big Cursor');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-cursor-1')
        AccessibilityLineHeightStepCount++
        $('html').attr('data-Accessibility-Cursor-Size', 'Big_Cursor');
        if (!isCkexist) {
            this.setCookie('acursor', ID, 5);
        }
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('big_Cursor active');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Cursor');
        $('html').removeAttr('data-Accessibility-Cursor-Size');

        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-cursor-1');
        this.deleteCookie('acursor');
    }

    if (value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Cursor');
        $('html').removeAttr('data-Accessibility-Cursor-Size');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass()
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-cursor-1');
        this.deleteCookie('acursor');
    }

}

const AccessibilityPauseAnimations = (Value, ID, isCkexist) => {
    if ($(`.accessibility_widget_uwaw #${ID}`).hasClass('active')) {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass('active');
        $('html').removeClass('AccessibilityPauseAnimations')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Pause Animations');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-pause');
        this.deleteCookie('apanim');
    } else {
        $(`.accessibility_widget_uwaw #${ID}`).addClass('active');
        $('html').addClass('AccessibilityPauseAnimations')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Play Animations');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-play');
        if (!isCkexist) {
            this.setCookie('apanim', ID, 5);
        }
    }

    if (Value == 'Reset') {
        $(`.accessibility_widget_uwaw #${ID}`).removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).addClass('accessibility_widget_btn')
        $('html').removeClass('AccessibilityPauseAnimations')
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__name').text('Pause Animations');
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon .icon').removeClass();
        $(`.accessibility_widget_uwaw #${ID}`).find('.accessibility_widget_btn__icon>span').addClass('icon icon-pause');
        this.deleteCookie('apanim');
    }
};

const ResetAllAccessibilitySettings = () => {
    $('.accessibility_widget__inner .accessibility_widget_btn').removeClass('active')
    $(".accessibility-profiles__list .accessibility-profiles__item .accessibility-profiles__btn").removeClass('active');
    // hide
    $('#accessibility_widget_box .accessibility_btn_reset.accessibility_widget_footer, #accessibility_widget_box .top_accessibility-reset_btn').hide()

    AccessibilityHighlightLink('Reset', 'accessibility_widget_Highlight_Links');
    AccessibilityHideImg('Reset', 'accessibility_widget_img_hide_btn');

    AccessibilityTextSize('Reset', 'accessibility_widget_bigger_text_btn');
    AccessibilityTextAlign('Reset', 'accessibility_widget_text_align_btn');
    AccessibilityContrast('Reset', 'accessibility_widget_Contrast_btn');
    AccessibilityTextSpacing('Reset', 'accessibility_widget_text_spacing_btn')
    AccessibilityChangeFont('Reset', 'accessibility_widget_changeFont_btn');
    AccessibilitySaturation('Reset', 'accessibility_widget_Saturation_btn');
    AccessibilityLineHeight('Reset', 'accessibility_widget_Line_Height_btn')
    AccessibilityCursorSize('Reset', 'accessibility_widget_Cursor_btn')
    AccessibilityPauseAnimations('Reset', 'accessibility_widget_text_Pause_animations_btn');
    this.deleteCookie('aprofilename');

};

const accessibilityMotorImpaired = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();

    } else {
        ResetAllAccessibilitySettings();
        $(obj).addClass('active');
        AccessibilityPauseAnimations('setValue', 'accessibility_widget_text_Pause_animations_btn', true);
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }
    }
}
const accessibilityColorBlind = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();
    } else {
        ResetAllAccessibilitySettings();
        $(obj).addClass('active');
        AccessibilitySaturation('setValue', 'accessibility_widget_Saturation_btn', true);
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }
    }
}

const accessibilityDyslexia = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();
    } else {
        ResetAllAccessibilitySettings();
        $(obj).addClass('active');
        AccessibilityPauseAnimations('setValue', 'accessibility_widget_text_Pause_animations_btn', true);
        AccessibilityChangeFont('setValue', 'accessibility_widget_changeFont_btn', true);
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }
    }
}
const accessibilityVisuallyImpaired = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();
    } else {
        ResetAllAccessibilitySettings();

        AccessibilityTextSize('setValue', 'accessibility_widget_bigger_text_btn', true);
        AccessibilityPauseAnimations('setValue', 'accessibility_widget_text_Pause_animations_btn', true);
        AccessibilityChangeFont('setValue', 'accessibility_widget_changeFont_btn', true);
        AccessibilityChangeFont('setValue', 'accessibility_widget_changeFont_btn', true);
        AccessibilityCursorSize('setValue', 'accessibility_widget_Cursor_btn', true)

        $(obj).addClass('active');
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }

    }
}
const accessibilityCognitiveLearning = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();
    } else {
        ResetAllAccessibilitySettings();
        $(obj).addClass('active');

        AccessibilityTextSize('setValue', 'accessibility_widget_bigger_text_btn', true);
        AccessibilityPauseAnimations('setValue', 'accessibility_widget_text_Pause_animations_btn', true)
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }
    }
}
const accessibilitySeizureEpileptic = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();
    } else {
        ResetAllAccessibilitySettings();
        $(obj).addClass('active');

        AccessibilitySaturation('setValue', 'accessibility_widget_Saturation_btn', true)
        AccessibilityPauseAnimations('setValue', 'accessibility_widget_text_Pause_animations_btn', true)
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }
    }
}

const accessibilityADHD = (obj,isCkexist) => {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        ResetAllAccessibilitySettings();
    } else {
        ResetAllAccessibilitySettings();
        $(obj).addClass('active');

        AccessibilityPauseAnimations('setValue', 'accessibility_widget_text_Pause_animations_btn', true);
        AccessibilitySaturation('setValue', 'accessibility_widget_Saturation_btn', true);
        if (!isCkexist) {
            this.setCookie('aprofilename', $(obj).attr("id"), 5);
        }

    }
}

$(".accessibility_widget_uwaw .accessibility_widget_btn, .accessibility-profiles__item .accessibility-profiles__btn").on("click", function () {
    showbutton();
});

this.showbutton = obj => {
    const ActiveBtnlength = $('.accessibility_widget_uwaw .accessibility_widget_btn.active').length;
    if (ActiveBtnlength != 0) {
        $('#accessibility_widget_box .accessibility_btn_reset.accessibility_widget_footer, #accessibility_widget_box .top_accessibility-reset_btn').show();
        $('.accessibility_trigger').addClass('active');
    } else {
        $('#accessibility_widget_box .accessibility_btn_reset.accessibility_widget_footer, #accessibility_widget_box .top_accessibility-reset_btn').hide();
        $('#accessibility_widget_box .accessibility-profiles__item .accessibility-profiles__btn').removeClass('active');
    }
}

this.Accessibilityinit = obj => {
    try {
        var aprofilename = getCookie('aprofilename');
        if (typeof (aprofilename) != "undefined" && aprofilename.length > 0) {
            var $objbutton = $("button[id='" + aprofilename + "']");
            if ($objbutton.length) {
                $objbutton.click();
            }

        }
        else {
            var acursor = getCookie('acursor');
            var ahlink = getCookie('ahlink');
            var ahimg = getCookie('ahimg');
            var apanim = getCookie('apanim');
            var atextsize = getCookie('atextsize');
            var atextalign = getCookie('atextalign');
            var acontrast = getCookie('acontrast');
            var asaturation = getCookie('asaturation');
            var atextspacing = getCookie('atextspacing');
            var atextfont = getCookie('atextfont');
            var alineheight = getCookie('alineheight');



            if (typeof (acursor) != "undefined" && acursor.length > 0) {
                AccessibilityCursorSize('setValue', acursor, true);
            }
            if (typeof (ahlink) != "undefined" && ahlink.length > 0) {
                AccessibilityHighlightLink('setValue', ahlink, true);
            }
            if (typeof (ahimg) != "undefined" && ahimg.length > 0) {
                AccessibilityHideImg('setValue', ahimg, true);
            }
            if (typeof (apanim) != "undefined" && apanim.length > 0) {
                AccessibilityPauseAnimations('setValue', apanim, true);
            }
            if (typeof (atextsize) != "undefined" && atextsize.length > 0 && atextsize.indexOf("~") > 0) {
                var arr_atextsize = atextsize.split("~")
                AccessibilityTextSize('setValue', arr_atextsize[0], true, parseInt(arr_atextsize[1]));
            }
            if (typeof (atextalign) != "undefined" && atextalign.length > 0 && atextalign.indexOf("~") > 0) {
                var arr_atextalign = atextalign.split("~")
                AccessibilityTextAlign('setValue', arr_atextalign[0], true, parseInt(arr_atextalign[1]));
            }
            if (typeof (acontrast) != "undefined" && acontrast.length > 0 && acontrast.indexOf("~") > 0) {
                var arr_acontrast = acontrast.split("~")
                AccessibilityContrast('setValue', arr_acontrast[0], true, parseInt(arr_acontrast[1]));
            }
            if (typeof (asaturation) != "undefined" && asaturation.length > 0 && asaturation.indexOf("~") > 0) {
                var arr_asaturation = asaturation.split("~")
                AccessibilitySaturation('setValue', arr_asaturation[0], true, parseInt(arr_asaturation[1]));
            }
            if (typeof (atextspacing) != "undefined" && atextspacing.length > 0 && atextspacing.indexOf("~") > 0) {
                var arr_atextspacing = atextspacing.split("~")
                AccessibilityTextSpacing('setValue', arr_atextspacing[0], true, parseInt(arr_atextspacing[1]));
            }
            if (typeof (atextfont) != "undefined" && atextfont.length > 0 && atextfont.indexOf("~") > 0) {
                var arr_atextfont = atextfont.split("~")
                AccessibilityChangeFont('setValue', arr_atextfont[0], true, parseInt(arr_atextfont[1]));
            }
            if (typeof (alineheight) != "undefined" && alineheight.length > 0 && alineheight.indexOf("~") > 0) {
                var arr_alineheight = alineheight.split("~")
                AccessibilityLineHeight('setValue', arr_alineheight[0], true, parseInt(arr_alineheight[1]));
            }
        }
        this.showbutton();
    } catch (e) {

    }
    

}

this.setCookie = (cname, cvalue, exdays) => {
    try {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    catch (ex) { }
}


this.getCookie = (cname) => {
    try {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
    }
    catch (ex) { }
    return "";
}
this.deleteCookie = (cname) => {
    try {
        this.setCookie(cname, "", -1);
    }
    catch (ex) { }
}

$(".accessibility_options__item [data-toggle='custom-collapse']").on("click", function () {
    const TargetDiv = $(this).attr('data-collapse-id');
    $(this).toggleClass("active");
    $(TargetDiv).slideToggle();

    if ($(this).hasClass('active')) {
        $(this).attr('aria-expanded', 'true')
    } else {
        $(this).attr('aria-expanded', 'false')
    }
});
