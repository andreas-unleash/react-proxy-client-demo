## React Proxy Client Example
To run: 
#### Pull docker image 
```bash
docker pull unleashorg/unleash-proxy
```

#### Run with our demo instance 
```bash
docker run \
   -e UNLEASH_PROXY_SECRETS=some-secret \
   -e UNLEASH_URL=https://app.unleash-hosted.com/demo/api/ \
   -e UNLEASH_API_TOKEN=56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d \
   -p 3000:3000 \
   unleashorg/unleash-proxy
```
