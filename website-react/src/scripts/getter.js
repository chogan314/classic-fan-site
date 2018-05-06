class Getter {
    constructor(source) {
        this.source = source;
        this.requesting = false;
    }

    get(args, onComplete) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = action;
        request.open('GET', this.source + this.argsToString(args));
        request.send(null);
        this.requesting = true;
        var parent = this;

        function action() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    try {
                        var data = JSON.parse(request.responseText);
                        onComplete(data);
                    } catch(e) {
                        alert(e + "\n" + request.responseText);
                    }
                } else {
                    alert('There was a problem with the request.');
                }
                parent.requesting = false;
            }
        }
    }

    getLimited(args, onComplete) {
        if (this.requesting) {
            return;
        }

        this.get(args, onComplete);
    }

    argsToString(args) {
        var keys = Object.keys(args);
        if (keys.length < 1) {
            return "";
        }

        var str = "?";
        keys.map(key => str = str + key + "=" + args[key] + "&");
        return str.substring(0, str.length - 1);
    }
}

export default Getter;