/************** バケットソート **************/

const SetRandomArray = (size, arr) => {
    for (var i = 0; i < size; i++) {
        arr.push(Random(0, 9));
    }
}

const Random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const Bucket = (buc, val) => {
    if (buc[val]) { buc[val].push(val) }
    else { buc[val] = [val] }
}

(() => {
    var array = [];
    var size = 10;
    var bucket_array = {};
    var sort_bucket_array = [];

    // 配列の値に重複ありで設定
    SetRandomArray(size, array);
    console.log(array);

    for (var i = 0; i < size; i++) { Bucket(bucket_array, array[i]); }
    console.log(bucket_array);

    for (var key in bucket_array) {
        bucket_array[key].forEach((v, i) => {
            sort_bucket_array.push(v);
        })
    }
    console.log(sort_bucket_array);
})()
