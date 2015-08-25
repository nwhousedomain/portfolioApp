$(function () {
    // add new trigger
    $('#add-trigger').on('click', function (e) {
        $('<div class="context-menu-one box menu-injected">'
            + 'right click me <em>(injected)</em>'
            + '</div>').insertBefore(this);

        // not need for re-initializing $.contextMenu here :)
    });

    $.contextMenu({
        selector: '.context-menu-one',
        callback: function (key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            "edit": { name: "Edit", icon: "edit" },
            "cut": { name: "Cut", icon: "cut" },
            "copy": { name: "Copy", icon: "copy" },
            "paste": { name: "Paste", icon: "paste" },
            "delete": { name: "Delete", icon: "delete" },
            "sep1": "---------",
            "quit": { name: "Quit", icon: "quit" }
        }
    });
});
