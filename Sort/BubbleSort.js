/************** バブルソート **************/

const SetRandomArray = (size, arr) => {
    for (var i = 0; i < size; i++) {
        arr.push(Random(0, 9));
    }
}

const Random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const Bubble = (arr, size) => {
    for (var i = 0; i < size - 1; i++) {

        // バブルソートは、泡が浮かんでいくイメージで実装する
        for (var j = size - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }

        console.log(arr);
    }
}

(() => {
    var array = [];
    var size = 10;

    // 配列の値に重複ありで設定
    SetRandomArray(size, array);

    Bubble(array, size);
})()
