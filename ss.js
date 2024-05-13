<script>
    function addMemo() {
        var memoInput = document.getElementById("memoInput");
        var memoList = document.getElementById("memoList");
        var memoText = memoInput.value;

        if (memoText.trim() !== "") {
            var memoDiv = document.createElement("div");
            memoDiv.className = "memo";
            memoDiv.innerHTML = memoText + '<span class="delete" onclick="deleteMemo(this)"> X </span>';
            memoList.appendChild(memoDiv);
            memoInput.value = "";
        } else {
            alert("메모를 입력하세요.");
        }
    }

    function deleteMemo(element) {
        var memoList = document.getElementById("memoList");
        var memoDiv = element.parentNode;
        memoList.removeChild(memoDiv);
    }
</script>

