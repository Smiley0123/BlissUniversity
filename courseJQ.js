//autocomplete input fields
$(document).ready(function () {
    // var suggestions_1;

    // Fetch JSON data
    $.getJSON('courseName.json', function (data) {
        suggestions_1 = data.name;

        // Populate datalist with suggestions
        populateSuggestions(suggestions_1);
    });
    // Handle input changes
    $('#c-search').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();
        var filteredSuggestions = suggestions_1.filter(function (suggestion) {
            return suggestion.toLowerCase().includes(searchTerm);
        });

        // Update the datalist with filtered suggestions
        populateSuggestions(filteredSuggestions);
    });
    function populateSuggestions(suggestions) {
        var datalistElement = $('#suggestions');

        // Clear previous options
        datalistElement.empty();

        // Add new options
        $.each(suggestions, function (index, suggestion) {
            datalistElement.append($('<option>', {
                value: suggestion
            }));
        });
    }
});


// sliding course list
// 1
$(document).ready(function () {
    $("#fields-col1").click(function () {
        $("#course-list1").slideToggle("fast");
    });
    $(document).ready(function () {
        var targetElement1 = $('#fields-col1');
        var courseList1 = $('#course-list1');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement1.is(event.target) && targetElement1.has(event.target).length === 0) {
                // If not, hide the target element
                courseList1.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement1.on('click', function (event) {
            event.stopPropagation();
        });
    });
    ($("#course-list1").mouseleave(function () {
        $("#course-list1").hide(500);
    }));

});

// 2

$(document).ready(function () {
    $("#fields-col2").click(function () {
        $("#course-list2").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement2 = $('#fields-col2');
        var courseList2 = $('#course-list2');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement2.is(event.target) && targetElement2.has(event.target).length === 0) {
                // If not, hide the target element
                courseList2.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement2.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list2").mouseleave(function () {
        $("#course-list2").hide(500);
    }));
});

// 3

$(document).ready(function () {
    $("#fields-col3").click(function () {
        $("#course-list3").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement3 = $('#fields-col3');
        var courseList3 = $('#course-list3');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement3.is(event.target) && targetElement3.has(event.target).length === 0) {
                // If not, hide the target element
                courseList3.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement3.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list3").mouseleave(function () {
        $("#course-list3").hide(500);
    }));
});

// 4

$(document).ready(function () {
    $("#fields-col4").click(function () {
        $("#course-list4").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement4 = $('#fields-col4');
        var courseList4 = $('#course-list4');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement4.is(event.target) && targetElement4.has(event.target).length === 0) {
                // If not, hide the target element
                courseList4.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement4.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list4").mouseleave(function () {
        $("#course-list4").hide(500);
    }));
});

// 5

$(document).ready(function () {
    $("#fields-col5").click(function () {
        $("#course-list5").slideToggle("fast");
    });
    $(document).ready(function () {
        var targetElement5 = $('#fields-col5');
        var courseList5 = $('#course-list5');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement5.is(event.target) && targetElement5.has(event.target).length === 0) {
                // If not, hide the target element
                courseList5.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement5.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list5").mouseleave(function () {
        $("#course-list5").hide(500);
    }));
});

// 6

$(document).ready(function () {
    $("#fields-col6").click(function () {
        $("#course-list6").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement6 = $('#fields-col6');
        var courseList6 = $('#course-list6');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement6.is(event.target) && targetElement6.has(event.target).length === 0) {
                // If not, hide the target element
                courseList6.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement6.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list6").mouseleave(function () {
        $("#course-list6").hide(500);
    }));
});

// 7

$(document).ready(function () {
    $("#fields-col7").click(function () {
        $("#course-list7").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement7 = $('#fields-col7');
        var courseList7 = $('#course-list7');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement7.is(event.target) && targetElement7.has(event.target).length === 0) {
                // If not, hide the target element
                courseList7.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement7.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list7").mouseleave(function () {
        $("#course-list7").hide(500);
    }));
});

// 8

$(document).ready(function () {
    $("#fields-col8").click(function () {
        $("#course-list8").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement8 = $('#fields-col8');
        var courseList8 = $('#course-list8');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement8.is(event.target) && targetElement8.has(event.target).length === 0) {
                // If not, hide the target element
                courseList8.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement8.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list8").mouseleave(function () {
        $("#course-list8").hide(500);
    }));
});

// 9

$(document).ready(function () {
    $("#fields-col9").click(function () {
        $("#course-list9").slideToggle("fast");
    });

    $(document).ready(function () {
        var targetElement9 = $('#fields-col9');
        var courseList9 = $('#course-list9');

        $(document).on('click', function (event) {
            // Check if the clicked element is inside the target element
            if (!targetElement9.is(event.target) && targetElement9.has(event.target).length === 0) {
                // If not, hide the target element
                courseList9.hide(500);
                // targetElement.hide();
            }
        });

        // Prevent hiding if clicked inside the target element
        targetElement9.on('click', function (event) {
            event.stopPropagation();
        });
    });

    ($("#course-list9").mouseleave(function () {
        $("#course-list9").hide(500);
    }));
});

