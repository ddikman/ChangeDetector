# ChangeDetector
Polls a website for content changes.

## Usage
1. Branch and clone
2. Create a detection settings file named settings.yml
3. Run it on your server
``` shell
npm start
```
4. It will email changes when occurring to the specified address

## Detection settings
A detection settings file can look like this:

```
settings:
 email: your@email.com
 interval: '* */10 * * * *'
 transport:
   host: smtp.gmail.com
   port: 465
   secure: true
   auth:
    user: user@gmail.com
    pass: password
sites:
 - name: Site
   url: http://url.com
   examine: '#item_id'
```
