function debounce(e,a,o){var n;return function(){var t=this,i=arguments,c=function(){n=null,o||e.apply(t,i)},s=o&&!n;clearTimeout(n),n=setTimeout(c,a),s&&e.apply(t,i)}}function stickyNav(e){var a=$("header.main--header").next().offset().top,o=$(document).scrollTop(),n=$("body"),t=$(".block--nav-topbar");a<=o?(t.addClass("fix"),n.addClass("fix")):(t.removeClass("fix"),n.removeClass("fix"))}var stickyNavDebounce=debounce(function(e){stickyNav(e)},70);