const input = document.querySelector("input");

const addButton = document.querySelector("button");

const list = document.querySelector("ul");

const label = document.querySelector("p");
let completedCount = 0;
const todoArray = [];

const arr = document.querySelector("h3");

let arrCount = 0;

addButton.addEventListener("click",
    function() {
        let text = input.value;
        todoArray.push(text);
        arrCount = todoArray.length;
        arr.innerText = arrCount;

        //console.log(text)
        const item = document.createElement("li");
        list.appendChild(item);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;

        item.appendChild(itemLabel);


        //Add en lyssnare på itemLabel

        itemLabel.addEventListener("click", function() {
            if (item.getAttribute("class") == "completed") {
                item.setAttribute("class", "");
                completedCount--;
            } else {
                item.setAttribute("class", "completed");
                completedCount++;
            }

            label.innerText = completedCount +
                " toDO completed";
        })

        if (text.length == 0) {
            document.querySelector("small").innerText = 'Input must not be empty';
            return;
        } else {
            document.querySelector("small").innerText = '';
        }
        input.value = '';
    });