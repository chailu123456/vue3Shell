import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        msg: {
            type: String,
            default: 222,
        }
    },
setup(props) {
    const a = () => {
        alert(345)
    }
    return () => {
        return (
            <button onClick={a}>{props.msg}</button>
            )
        }
    }       
})