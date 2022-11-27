let batch = [];

function updateBatchPreview(batch) {
    const batchPreview = document.getElementById('batchPreview');
    // build a table with the batch
    let table = `<table class="table" id="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
            </tr>
        </thead>
        <tbody>`;
    batch.forEach((item) => {
        table += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
        </tr>`;
    });
    table += `</tbody></table>`;
    batchPreview.innerHTML = table;

    console.log(batch);
}

updateBatchPreview(batch);

function addToBatch(e) {
    // get the value of the checkbox input

    if (e.checked) {
        const name = e.value;

        batch.push({ id: Math.floor(Math.random() * 2000), name });
    }
    // remove if unchecked
    else {
        const name = e.value;
        batch = batch.filter((item) => item.name !== name);
    }

    updateBatchPreview(batch);
}
