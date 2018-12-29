/************** 単純選択ソート **************/

const SetRandomArray = (size, arr) => {
    for (var i = 0; i < size; i++) {
        arr.push(Random(0, 10));
    }
}

const Random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const Swap = (arr, i, ti) => {
    let temp = arr[i];
    arr[i] = arr[ti];
    arr[ti] = temp;
}

(() => {
    var array = [];
    var size = 10;

    // 今回は配列の値に重複ありで設定
    SetRandomArray(size, array);

    for (var i = 0; i < size; i++) {
        var target_index = i;

        // 有効範囲で一番小さい値（配列のインデックス）を探す
        for (var j = i + 1; j < size; j++) {
            if (array[j] < array[target_index]) {
                target_index = j;
            }
        }

        console.log(array);

        // JS は配列は参照渡しになる
        Swap(array, i, target_index);
    }
})()
