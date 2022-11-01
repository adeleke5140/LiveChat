<template>
    <nav>
        <table class="tg">
            <tbody>
                <tr>
                    <th class="tg"><span class="welcome">Hey there...</span></th>
                    <td class="tg" @click="goToAccount"><span class="name">{{ user.displayName }}</span></td>
                </tr>
            </tbody>
        </table>
        <Button text="logout" :isPending="isPending" @click="handleLogout" />
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import delay from '../composables/delay';
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';
import Button from './Button.vue';

const { user, loading } = getUser()
const { logout, error, isPending } = useLogout()

const router = useRouter()
const handleLogout = () => {
    isPending.value = true

    delay(2000).then(async () => {
        await logout()
        router.push('/')
    })

    if (!error.value) {
        console.log('user logged out')
    }

}

const goToAccount = () => {
    router.push({ name: 'account' })
}
</script>

<style scoped>
button {
    width: auto;
    margin-top: 0em;
    height: 30px;
    width: 82px;
}

.pending {
    width: 10px;
    height: 10px;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2em 0;
}

span {
    display: inline-block;
}

.welcome {
    font-size: var(--font-size-smaller);
    padding-left: 1em;
    padding-right: 1em;

}

.name {
    font-weight: bold;
    font-size: var(--font-size-smaller);
    padding: 0 1em;
}

.tg {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #333;
    overflow: hidden;
    padding: 2px 5px;
    height: 28px;
    white-space: nowrap
}

.tg:last-child:hover {
    background-color: var(--hover-color);
    cursor: pointer;
}
</style>