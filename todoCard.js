Vue.component('todo-card',{
    template: `
    <div>
        <h1>{{title}}</h1>
        <h2>{{content}}</h2>
    </div>
    `,
    // 데이터끼리 독립된 공간을 만들어주기 위해서 함수로 구분
    data: function(){
    return {

    }
    },
    methods: {

    },
    props: {
    title: {
        type: String,
        required: true,
        validator: function(input){
        if (input.length < 5) {
            return false
        }
        return true
        }
    }, 
    content: String
    }
})