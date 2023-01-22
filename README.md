# nodekit-examples

Set of examples for [NodeKit](https://github.com/gravity-ui/nodekit) and [ExpressKit](https://github.com/gravity-ui/expresskit) projects.

Development usage:

```bash
mkdir nodekit-dev && cd nodekit-dev

# Cloning and linking base libraries
(git clone git@github.com:gravity-ui/nodekit && cd nodekit && npm ci && npm link)
(git clone git@github.com:gravity-ui/expresskit && cd expresskit && npm ci && npm link)

# Cloning examples
git clone git@github.com:gravity-ui/nodekit-examples
cd nodekit-examples/express

# Linking examples with base libraries
npm ci && npm link @gravity-ui/nodekit && npm link @gravity-ui/expresskit

# Running example app
npm run dev
```
