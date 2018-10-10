<template>
    <div class="meiti">
        <div class="filter">
            <div class="item">
                <div class="item-label">频道类型</div>
                <ul class="item-list">
                    <li class="list-option">IT科技</li>
                    <li class="list-option">生活消费</li>
                    <li class="list-option">女性时尚</li>
                    <li class="list-option">娱乐体闲</li>
                    <li class="list-option">房产家居</li>
                </ul>
            </div>
            <div class="item">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.meiti {
    .filter{
        background-color: red;
        .item {
            width: 100%;
            height: 50px;
            .item-list {
                width: 100%;
                .list-option{
                    float: left;
                    margin: 10px;
                }
            }

        }
    }
}
</style>


