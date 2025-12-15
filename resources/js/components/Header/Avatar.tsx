export default function Avatar() {
    return (
        <div className="relative">
            <div className="absolute top-3 left-0 h-10 w-10 origin-left rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10" />
            <a
                aria-label="Home"
                className="pointer-events-auto block h-16 w-16 origin-left"
                href="/"
            >
                <img
                    alt="Avatar"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEoegGEIZHDYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722324672016?e=1767225600&v=beta&t=Jvnty5u202ppnp20CAhjkVD6l4z7rC-40njRbxBzcHw"
                />
            </a>
        </div>
    );
}
