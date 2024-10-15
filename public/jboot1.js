
const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const modeText = body.querySelector(".mode-text");
const modeSwitch = body.querySelector(".toggle-switch");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

$(document).ready(function() {
    var dateCount = 0;

    
    $('#addDateBtn').on('click', function() {
        
        var dateInput = $('#dateInput').val();

        
        if (dateInput) {
            var isDuplicate = false;
            $('#dateList li').each(function() {
                if ($(this).find('.date-text').text() === dateInput) {
                    isDuplicate = true;
                    return false;  
                }
            });

            if (isDuplicate) {
                alert("This date has already been added to the list.");
                return;
            }

            dateCount++;

            
            var sectionId = 'inputSection' + dateCount;
            $('#dateList').append(`
                <li class="dateItem" data-section="` + sectionId + `">
                    <span class="date-text">` + dateInput +`</span>
                    
                    <button class="removeDateBtn">Remove</button>
                    
                </li>
            `);

            /*$('#dateList').append('<li class="dateItem" data-section="' + sectionId + '">' + dateInput + '</li>');*/

            $('#dynamicSections').append(`
                <div id="` + sectionId + `" class="inputSection">
                    <h3>TASK TO DO FOR DATE: ` + dateInput + `</h3>
                    <input type="text" class="itemInput" placeholder="Enter item">
                    <button class="addItemBtn">Add Item</button>

                    <ul class="itemList" type="none">
                    </ul>
                    <!-- Additional items will be added here -->
                </div>
            `);

            $('#dateInput').val('');
        } else {
            alert("Please select a date before adding.");
        }
        $('.gg').on('click', function() {
            $(this).parent().fadeOut(1500);
        });

        $('.removeDateBtn').on('click', function() {
            var $parent = $(this).parent();  // Get the parent <li> of the remove button
            var sectionId = $parent.data('section');  // Get the section ID

            $('#' + sectionId).remove();  // Remove the corresponding input section
            $parent.remove();  // Remove the date from the list
        });
    });

    $(document).on('click', '.dateItem', function() {
        var sectionId = $(this).data('section');

        $('.inputSection').hide();
        $('#' + sectionId).show();

        $('html, body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 500);
    });

    $(document).on('click', '.addItemBtn', function() {
        var $input = $(this).siblings('.itemInput');  
        var $list = $(this).siblings('.itemList');    

        var itemValue = $input.val();

        if (itemValue) {
            $list.append('<li>' + itemValue +'<span class="gg">X</span></li>');

            $input.val('');
        } else {
            alert("Please enter an item before adding.");
        }
        $('.gg').on('click', function() {
            $(this).parent().fadeOut(500);
        });
    });

});

