<div class="header-background">
    <div class="header">
        <div class="content">Disney Characters</div>
        <div class="decription">Choose your favorite hero</div>
    </div>
</div>

<style lang="less">
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

    .header-background {
        position: relative;
        background-image: url(https://wallpapers.com/images/hd/animated-disney-castle-has6vy47k75d0bzs.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 50vh;
        color: white;
        font-size: 24px;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.5);
        user-select: none;
    }

    .header-background::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
    }

    .content {
        font-size: 3.2rem;
        font-family: 'Lora', serif;
    }
    .decription {
        padding: 20px;
        font-size: 1.2rem;
        font-family: 'Lora', serif;
    }
    .header {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 20%;
        height: 50%;
        width: 100%;
    }
</style>
