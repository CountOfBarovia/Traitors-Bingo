// Array of the common traitors occurences
const cells = ['"100% faithful"', '"I\'m getting murdered tonight"', '"Big personality"', '"110%"', 'Name mispelled', '"I hope I\'m wrong"', 'Unnecessary deception', 'Heart on the voting board', '"I love you but..."', '"Target on my back"', 'Shouting over someone else', 'Absolute belief in a wrong idea'];

// Create the data for a random bingo card
function random_array(cells){
    output = [[], [], [],
              [], [], [],
              [], [], []];
    let unused = cells;
    for (let i = 0; i < output.length; i++){
        let index = Math.floor(Math.random() * unused.length);
        output[i] = unused[index];
        unused.splice(index, 1);
    }
    document.getElementById("demo").innerHTML = output[0];
    return output;
}