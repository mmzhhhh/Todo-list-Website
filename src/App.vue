<script setup>
import { ref, onMounted, computed, watch } from 'vue'

// 代办事项数组
const todos = ref([])

//用户姓名
const name = ref('')

//代办事项内容
const input_content = ref('');

//代办事项类型,设置为null的原因是只有自带两种类型
const input_category = ref(null);

// 排序添加事例 时间早的排前面
const todos_asc = computed(() => todos.value.sort((a, b) => {
    return a.createdAt-b.createdAt;
}))

//监听存储新名字
watch(name, (newVal) => {
    localStorage.setItem("name", newVal);
})

//监听存储新代办示例
watch(todos, (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
    //开启深度监听
}, {
    deep: true
})



//添加代办事例
const addTodo = () => {
    // 如果名字和类型为空则返回，什么都不做
    if (input_content.value.trim() === '' || input_category.value === null) {
        return;
    }
    todos.value.push({
        content: input_content.value,
        category: input_category.value,
        //默认未完成
        done: false,
        //创建时间
        createdAt: new Date().getTime(),
    })
    // 添加完成后置空
    input_content.value='';
    input_category.value=null;

}

onMounted(() => {
    // 获取本地存储的name
    // 如果没有全部置空
    name.value = localStorage.getItem('name') || '';
    todos.value=JSON.parse(localStorage.getItem("todos")||[]);
})

const removeTodo=(todo)=>{
    todos.value=todos.value.filter((t)=>t!==todo);
}


</script>

<template>
    <main class="app">
        <!-- 名字栏 -->
        <section class="greeting">
            <h2 class="title" style="text-decoration: underline;">todo-list-Website wiht vue and firebase</h2>
            <h2 class="title">
                What's up,<input type="text" placeholder="name here" id="name" name="name" v-model="name">
            </h2>
        </section>

        <!-- 创建代办事项 -->
        <section class="create-todo">
            <h3>Create a todo</h3>
            <!-- 表单 -->
            <form id="new-todo-form" @submit.prevent="addTodo">
                <h4>What's on your todo list?</h4>
                <!-- 代办事项创建 -->
                <input type="text" placeholder="e.g.make a video" id="content" name="content" v-model="input_content">
                <h4>Pick a category</h4>
                <div class="options">
                    <!-- business选项 -->
                    <label>
                        <input type="radio" name="category" id="category1" value="business" v-model="input_category">
                        <span class="bubble business"></span>
                        <div>business</div>
                    </label>

                    <!-- business选项 -->
                    <label>
                        <input type="radio" name="category" id="category2" value="personal" v-model="input_category">
                        <span class="bubble personal"></span>
                        <div>personal</div>
                    </label>
                </div>

                <input type="submit" value="Add todo">
            </form>
        </section>

        <!-- 代办事例展示 -->
        <section class="todo-list">
            <h3>Todo List</h3>
            <div class="list" id="todo-list">
                <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
                    <!-- 类型符 -->
                    <label>
                        <input type="checkbox" v-model="todo.done">
                        <span :class="`bubble ${todo.category=='business'?'business':'personal'}`">
                        </span>
                    </label>
                    <!-- 代办事例文字 -->
                    <div class="todo-content">
                        <input type="text" v-model="todo.content">
                    </div>
                    <!-- 删除按钮 -->
                    <div class="actions">
                        <button class="delete" @click="removeTodo(todo)">Delete</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
