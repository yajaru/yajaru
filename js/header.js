window.onload = function() {
    var title = document.querySelector('#title');
    var subtitle = document.querySelector('#subtitle');
    item = Math.floor(Math.random() * quotes.length);
    title.innerHTML = quotes[item][0];
    subtitle.innerHTML = quotes[item][1];
};

var quotes = [
    [
        "This is a header.",
        "(yes it is)"
    ],
    [
        "Are apples hotter than oranges?",
        "Quote by Peter"
    ],
    [
        "Did you hear about the resturant on the Moon?",
        "There is no atmosphere."
    ]
];
