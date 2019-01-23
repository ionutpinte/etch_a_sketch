$( document ).ready(function() {

    const mainContainerWidth = $("#mainContainer").width();
    const mainContainerHeight = $("#mainContainer").height();
    console.log(`Main container width is: ${mainContainerWidth}`);
    console.log(`Main container height is: ${mainContainerHeight}`);

    createGrid();

    function createGrid(){
        let numberOfSquares = prompt("Enter grid dimension: ");

        const divSquareWidth = mainContainerWidth / numberOfSquares;
        const divSquareHeight = mainContainerHeight / numberOfSquares;
    
        console.log(`Div square width is: ${divSquareWidth}`);
        console.log(`Div square height is: ${divSquareHeight}`);
    
        const divSquare = `<div style = "width:${divSquareWidth}px;height:${divSquareHeight}px" class = "divSquare"></div>`;
    
        for(let i = 0; i < numberOfSquares * numberOfSquares; i++){
            $("#mainContainer").append(divSquare);
        }
    
        $(".divSquare").hover(function(){
            $(this).addClass("coloredDivSquare");
        })
    }

    $("#resetButton").click(function(){
        $("#mainContainer").children().remove();
        createGrid();
    })

});