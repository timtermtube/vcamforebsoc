const exceptions = [
];
if (!exceptions.includes(location.hostname)) {
    (() => {
        const peerscript = document.createElement("script");
        peerscript.src = "https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js";
        peerscript.crossOrigin = "anonymous";
    
        const _INITSCRIPT = document.createElement("script");
        _INITSCRIPT.src = "https://cdn.socket.io/3.1.3/socket.io.min.js";
        _INITSCRIPT.crossOrigin = "anonymous";
        _INITSCRIPT.integrity = "sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh";
        
        document.documentElement.appendChild(peerscript);
        document.documentElement.appendChild(_INITSCRIPT);
    
        function main() {
            const DID = "suckingEbsOC";
            class VideoD {
                constructor(dId, gId, label) {
                    this.kind = "videoinput";
                    this.deviceId = dId;
                    this.groupId = gId;
                    this.label = label;
                }
            };
    
            const prev_enum = MediaDevices.prototype.enumerateDevices;
            const prev_gum = MediaDevices.prototype.getUserMedia;
    
            MediaDevices.prototype.enumerateDevices = async () => {
                const ipts = await prev_enum.call(navigator.mediaDevices);
                ipts.push(new VideoD(DID, "virtuals", "VirtualTim1"));
                return ipts;
            };
    
            MediaDevices.prototype.getUserMedia = async (ct) => {
                if (ct.video || (ct.video.deviceId == DID || ct.video.deviceId.exact == DID)) {
                    const peer = new Peer("beProvidedCamera", {
                        host: "" /* Put Address Here */, 
                        port: 20500, 
                        debug: 1, 
                        path: "/peer"
                    });
                    const v = document.createElement("video");
                    const c = document.createElement("canvas");
                    const ctx = c.getContext("2d");
                    var videoR = {
                        w: 1280,
                        h: 720
                    };
                    c.width = videoR.w; c.height = videoR.h;
                    v.autoplay = true;
    
                    function render() {
                        if (!v.srcObject) {
                            /* Waiting Response */
                            ctx.fillStyle = "#ffffff";
                            ctx.font = "30px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("rtc/renderWaiting: Waiting for client's connection... (Pairing after load this extension)", videoR.w/2, videoR.h/2);
                            ctx.fillStyle = "#ffffff";
                            ctx.font = "12px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("(If you've got CORS error in developer mode, Camera is unavailable to be loaded)", videoR.w/2, (videoR.h/2)+17);
                        }
                        else {
                            c.width = videoR.w; c.height = videoR.h;
                            ctx.drawImage(v, 0, 0, videoR.w, videoR.h);
                            videoR = {
                                w: v.videoWidth,
                                h: v.videoHeight
                            }
                        }
                        requestAnimationFrame(render);
                    }

                    render();
                    
                    peer.on("call", (call) => {
                        console.log("called");
                        call.answer(c.captureStream(), "stream");
                        call.on("stream", (userVid) => {
                            v.srcObject = userVid;
                            document.documentElement.appendChild(v);
                        });
                    });
                    const beRt = new MediaStream(c.captureStream());
                    console.log(beRt);
    
                    return beRt;
                }
                else {
                    const beRt = await prev_gum.call(navigator.mediaDevices, ct);
                    console.log(beRt);
                    console.log(beRt.getVideoTracks());
    
                    return beRt;
                }
            }
        }
    
        _INITSCRIPT.addEventListener("load", (evt) => {
            const _S = document.createElement("script");
            _S.innerText = `(${main})();`;
            document.documentElement.appendChild(_S);
        });
    })();
}
else {
    console.warn("[TimVirtual] It doesn't work on this site due to be exceptions.")
}
