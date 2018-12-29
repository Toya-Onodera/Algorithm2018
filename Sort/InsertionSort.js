/************** 単純挿入ソート **************/

const SetRandomArray = (size, arr) => {
    for (var i = 0; i < size; i++) {
        arr.push(Random(0, 10));
    }
}

const Random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const Insert = (arr, ind, n) => {
    // ターゲットが正しいインデックスに格納できるよう検索を行う
    for (var i = ind; i > 0 && arr[i - 1] > n; i--) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
}

(() => {
    var array = [];
    var size = 10;

    // 配列の値に重複ありで設定
    SetRandomArray(size, array);

    for (var i = 1; i < size; i++) {
        if (array[i - 1] > array[i]) {
            Insert(array, i, array[i]);
        }

        console.log(array);
    }
})()
