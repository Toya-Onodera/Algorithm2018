/************** バケットソート **************/

// 有効数字化する
// https://qiita.com/terrym/items/6257f6507ca19f00cdf3 を参考にした
const zeroPadding = (num) => {
    return ('000' + num).slice(-3);
}

const SetRandomArray = (size, arr) => {
    for (var i = 0; i < size; i++) {
        arr.push(zeroPadding(Random(0, 1000)));
    }
}

const Random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const Bucket = (buc, val, tar) => {
    buc = {};

    if (buc[val.charAt(2)]) {
        buc[val.charAt(2)].push(val)
    }

    else {
        buc[val.charAt(2)] = [val]
    }

    Radix(buc);
}

const Radix = (buc_arr) => {
    var sort_bucket_array = [];

    for (var key in buc_arr) {
        buc_arr[key].forEach((v, i) => {
            sort_bucket_array.push(v);
        })
    }

    return sort_bucket_array;
}

(() => {
    var array = [];
    var size = 10;
    var bucket_array = {};

    // 配列の値に重複ありで設定
    SetRandomArray(size, array);
    console.log(array);

    // 一の位のソート
    for (var i = 0; i < size; i++) {
        Bucket(bucket_array, array[i]);
    }
    array = Radix(bucket_array);
    console.log(bucket_array);

    // 十の位のソート
    for (var i = 0; i < size; i++) {
        Bucket(bucket_array, array[i]);
    }
    console.log(bucket_array);
})()
