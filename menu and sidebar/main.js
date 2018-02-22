var $toggle_button = $('.toggle.item'),
    $sidebar = $('.ui.sidebar');

// Changes sidebar's context and settings .
$sidebar.sidebar({context:$('#wrapper')})
        .sidebar('setting', 'transition', 'auto');

$sidebar.sidebar('setting', 'defaultTransition', {
  computer: {
    left   : 'overlay',
    right  : 'overlay',
    top    : 'overlay',
    bottom : 'overlay'
  },
  mobile: {
    left   : 'overlay',
    right  : 'overlay',
    top    : 'overlay',
    bottom : 'overlay'
  }
});

// Toggles the sidebar .
$toggle_button.on('click', function() {
    $sidebar.sidebar('toggle');
});
