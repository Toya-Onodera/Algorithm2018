/************** バケットソート **************/

// 有効数字化する
// https://qiita.com/terrym/items/6257f6507ca19f00cdf3 を参考にした
const ZeroPadding = (array, size) => {
    for (var i = 0; i < size; i++) {
        array[i] = ('000' + array[i]).slice(-3);
    }
}

const SetRandomArray = (size, arr) => {
    for (var i = 0; i < size; i++) {
        arr.push(Random(0, 1000));
    }
}

const Random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const Bucket = (arr, size, ci) => {
    var return_bucket_array = {};

    for (var i = 0; i < size; i++) {
        if (return_bucket_array[arr[i].charAt(ci)]) {
            return_bucket_array[arr[i].charAt(ci)].push(arr[i]);
        }

        else {
            return_bucket_array[arr[i].charAt(ci)] = [arr[i]];
        }
    }

    return return_bucket_array;
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

const parseIntArray = (array, size) => {
    for (var i = 0; i < size; i++) {
        array[i] = parseInt(array[i]);
    }
}

(() => {
    var array = [];
    var size = 10;
    var bucket_array = {};

    // 配列の値に重複ありで設定
    SetRandomArray(size, array);
    console.log(array);

    ZeroPadding(array, size)

    // 一の位のソート
    bucket_array = Bucket(array, size, 2);
    array = Radix(bucket_array);
    console.log(bucket_array);

    // 十の位のソート
    bucket_array = Bucket(array, size, 1);
    array = Radix(bucket_array);
    console.log(bucket_array);

    // 百の位のソート
    bucket_array = Bucket(array, size, 0);
    array = Radix(bucket_array);
    console.log(bucket_array);

    parseIntArray(array, size);
    console.log(array);
})()
