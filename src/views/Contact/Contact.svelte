<script lang="ts">
</script>

<div class="characters-list-container">
    <div class="characters-list">
        <div class="avatar">
            <img
                src="https://avatars.githubusercontent.com/u/81170600?s=400&u=ab729ba27b26638728e4100a23a9b2a5f988bfdf&v=4"
                alt="Avatar"
                class="character-avatar"
            />
        </div>
        <div class="desriptions">
            <div class="header">Lukas Zielinski</div>
            <div class="description">
                A young frontend developer from Gdańsk, with 2 years of experience in developing commercial projects. Passionate about
                creating clear graphical interfaces and flexible solutions. I have a significant desire to grow in web technologies and
                learn everything related to it. Ready and eager to learn!
            </div>
        </div>
    </div>
</div>

<style lang="less">
    .center-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .characters-list-container {
        height: 80vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lora', serif;
        animation: fadeIn 1s ease-in-out forwards;
    }
    .characters-list {
        display: grid;
        grid-template-columns: 30% auto;
        width: 60%;
        height: 50%;
        border: 1px solid rgba(172, 172, 172, 0.545);
        border-radius: 20px;
        font-family: 'Roboto Mono', monospace;
        @media (max-width: 900px) {
            width: 90%;
            height: 50%;
            grid-template-columns: 0% auto;
        }
    }
    .avatar {
        .center-flex();
    }
    .desriptions {
        display: grid;
        grid-template-rows: 30% 50%;
    }
    .header {
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 20px;
        color: rgb(255, 255, 255);
    }
    .description {
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        justify-content: left;
        align-items: center;
        text-align: justify;
        padding: 20px;
        color: rgb(255, 255, 255);
    }
    .character-avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        @media (max-width: 900px) {
            display: none;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
