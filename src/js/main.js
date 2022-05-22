import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';

import {App} from './parts/app.js'
import {Plugins} from './parts/plugins.js'
import {Parts} from './parts/parts.js'


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

    window.windowWidth = $(window).width();
    window.windowHeight = $(window).height();

    window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
    window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
    window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

    //Functions List Below

    window.app = new App();
    window.app.init();

    window.plugins = new Plugins();
    window.plugins.init();

    window.parts = new Parts();
    window.parts.init();

});

// ===========================================================================

// Select2 JS
$(document).ready(function() {
    $('.select-dropdown').select2();
    $('.product-option, .disable-search').select2({
            minimumResultsForSearch: -1
    });
});


// fancy box
require('@fancyapps/ui/src/Fancybox/Fancybox');

// ===========================================================================



//header
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 120) sticky.addClass('header-fixed');
    else sticky.removeClass('header-fixed');
});
var p = $( "header" );
$( ".fake-header" ).css( "height", p.innerHeight() );


//mega menu script
$("[data-menu='true']").click(function(){
    var isOpen = $(this).hasClass("open");
    var siblings = $(this).parent().siblings().find(".open");
    var openedMenu = siblings.data("menu-name");
    $(openedMenu).toggleClass("show");
    siblings.removeClass("open");
    $(this).toggleClass("open");
    var megamenu = $(this).data("menu-name");
    $(megamenu).toggleClass("show");
    if(!isOpen){
        $("body").addClass("fixed-bg");
    }else{
        $("body").removeClass("fixed-bg");
    }
});

$(".menu-bg-overlay, .menu-close").click(function () {
    $(".custom-mega-menu").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".mega-menu").removeClass("open");
});

$(".mega-menu-back").click(function () {
    $(".custom-mega-menu").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".mega-menu").removeClass("open");
});

/* smooth scroll */
var targetScriollOffset = 0;
jQuery('[data-scroll="true"]').click(function (e) {
    e.preventDefault();
    var target = jQuery(jQuery(this).attr("href"));
    targetScriollOffset = target.data("scroll-offset");
    if (typeof targetScriollOffset !== typeof undefined && targetScriollOffset !== false) {
        var position = target.offset().top - targetScriollOffset;
    } else {
        var position = target.offset().top;
    }
    jQuery("body, html").animate({
        scrollTop: position
    });
});


// tab filter js
$(document).ready(function(){
    $(".filter-tab-btn").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            $('.filter').show('700');
        }
        else
        {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('2000');
        }

        var filterOpen = $(this).hasClass("active");

        if(filterOpen){
            $('.filter-tab-btn').removeClass('active');
        }else {
            var siblings = $('.filter-tab-nav').find(".active");
            siblings.removeClass('active');
            $(this).addClass('active');
        }
    });

// END tab filter js

// video filter
    $(".video-filter-btn").click(function(){
        var value = $(this).attr('video-filter');

        if(value == "all")
        {
            $('.video-filter').show('700');
        }
        else
        {
            $(".video-filter").not('.'+value).hide('2000');
            $('.video-filter').filter('.'+value).show('2000');
        }

        var filterOpen = $(this).hasClass("active");

        if(filterOpen){
            $('.video-filter-btn').removeClass('active');
        }else {
            var siblings = $('.video-tab-nav').find(".active");
            siblings.removeClass('active');
            $(this).addClass('active');
        }
    });

});


