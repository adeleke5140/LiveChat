# Livechat

Ever wanted to communicate with friends in real-time about movies or tvshows you are watching, LiveChat is that platform 🎉

## Why I decided to build LiveChat
I got tired of building generic projects and wanted to explore building something I would actually use.
After tinkering with VueJS on small side projects, I decided to use it in this massive one. I hope my friends can enjoy using it
as much as I enjoyed building it.

## What problem does it solve

I regularly see my friends on twitter livechat while watching an exciting show. They want to share their thoughts in real time as they
enjoy the show. The problem is: It leads to spoilers for others. With that, I thought. What if there was a minimalistic platform
where users can come create rooms to talk about their real time experience of anime, tvshows, books and movies. And then Live Chat was born.

## Stack

The Chatroom is built with `vueJS` on the frontend and `firebase` for `Authentication` and `Database` storage.

### Why vueJS instead of React

It is just down to Developer experience. I feel my productivity doubling when I write `html` in vue `template` elements
instead of trying to figure out the intricacies of `JSX`

### Why Firebase

I have no issues spinning up my own Express server and hooking that up to MongoDB. but Firebase just works even with its limitation.
There is the downside of building my entire backend Infra on a centralized service but this time around convenience and amazing docs
was a seller for me.

`Vite` is the `build` tool because it is **blazing fast**:fire: and in my experience offers a better DX than the `vue-cli`

To get started on your local machine:

1. Clone the `repo`
2. Run `yarn`
3. Run `yarn dev` to deploy it on your local environment

### Current Task List
- [x] Add the main chatroom feature
- [ ] Add the ability for users to create their own chatrooms
- [ ] Add filter for Anime, tvshows and Movie content
- [ ] Add filter bar to search for chatroom
- [ ] Add profile page to update Username and Profile Photo


Most of this was inspired by NetNinja's Udemy's VueJS Course. It's amazing. Check it out [here](https://www.udemy.com/share/1021503@8wwtRofEg0IrR_MtZGp-3IHQhdQlcop4gaqbLadqjZo9JcUObXhJB9tmzdrBHqte3Q==/)
