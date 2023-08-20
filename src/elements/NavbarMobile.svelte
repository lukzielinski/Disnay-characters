<script lang="ts">
    import 'bootstrap-icons/font/bootstrap-icons.css'
    import { push } from 'svelte-spa-router'
</script>

<div class="hamburger-menu">
    <input type="checkbox" class="hamburger" />
    <ul>
        <li on:click={() => push('/mostPopular')}>
            <i class="bi bi-trophy" />
        </li>
        <li on:click={() => push('/list')}>
            <i class="bi bi-card-list" />
        </li>
        <li on:click={() => push('/favourites')}>
            <i class="bi bi-star" />
        </li>
        <li on:click={() => push('/contact')}>
            <i class="bi bi-person-rolodex" />
        </li>
    </ul>
</div>

<style lang="less">
    .hamburger-menu {
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 500;
        height: 50px;
        border-radius: 25px;
        overflow: hidden;
        background: #232323;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease;
        color: white;

        & > * {
            float: left;
        }
    }

    .hamburger {
        display: block;
        cursor: pointer;
        opacity: 0;
        z-index: 999;
        margin: 0;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;

        &:checked ~ ul {
            width: 250px;
            background-position: 0px -50px;
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0 0 0 50px;
        height: 50px;
        width: 0px;
        transition: 0.5s width ease;
        background-image: url('https://i.imgur.com/3d0vJzn.png');
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

    li {
        display: inline-block;
        line-height: 50px;
        width: 50px;
        text-align: center;
        margin: 0;

        a {
            font-size: 1.25em;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }
    }
</style>
