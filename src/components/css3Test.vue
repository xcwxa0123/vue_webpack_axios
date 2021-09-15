<template>
    <div>
        <div>
            <div class="div1"></div>
        </div>
        <div>
            <div class="div1_r"></div>
            <div class="div1_b"></div>
            <div class="div1_l"></div>
        </div>

        <div class="div_2_block"></div>
        <!-- <div class="div2"></div> -->
        <button class="div3">点我</button>

        <input
            style="width:300px;height:200px"
            ref="upload_file" 
            type="file" 
            @change="inputChange" 
            accept=".xls,.xlsx,.pdf,.doc,.docx,.png,.jpg,.jpeg" 
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
    async inputChange(e) {
      let files = e.target.files;
      let uploadAll = [].slice.call(files, 0).map(this.upload);
      let result = await Promise.all(uploadAll);
      this.$refs["upload_file"].value='';
    //   this.change();
    },
    upload(file, index) {
      console.log('file', file);
      // let isType = false;
      // //文件类型
      // let fileName = new Array()
      // fileName = file.name.split('.')
      // fileName = fileName[fileName.length - 1]
      // let typeList = this.fileTypes.split(','),
      //     reg = new RegExp(`^\.?${fileName}$`);
      // for (let i = 0; i < typeList.length; i++) {
      //     if(isType = reg.test(typeList[i])) break;
      // }
      // if (!isType) {
      // Toast({
      //         message: `只上传${this.fileTypes} 格式！`,
      //         duration: 2000
      //     })
      // }




    //   let curfile = file;
    //   const isLt = curfile.size / 1024 / 1024 < this.maxSize;
    //   if (!isLt) {
    //     Toast({
    //       message: `上传附件大小不能超过 ${this.maxSize}M!`,
    //       duration: 800
    //     });
    //     return false;
    //   }
    //   Indicator.open("上传中");
    //   return new Promise(async (resolve, reject) => {
    //     let form = new FormData();
    //     form.append("multiReq", file);
    //     let result = await api.batchupload(form);
    //     Indicator.close();
    //     if (!result.data.Result || result.data.Result != "1") {
    //       Toast(`上传错误`);
    //       resolve(result);
    //       return;
    //     }
    //     let nameArr = result.data.Data.fileName.split(".");
    //     this.fileList.push({
    //       fileName: result.data.Data.fileName,
    //       fileType: nameArr[nameArr.length - 1],
    //       fileUrl: result.data.Data.fileUrl
    //     });
    //     resolve(result);
    //   });
    },
    }
}
</script>

<style>
    .div1, .div1_b{
        width: 220px;
        height: 3px;
        background-color: #000000;
        /* margin-top: 100px; */
        display: inline-block;
    }

    .div_2_block{
        width: 200px;
        height: 200px;
        background: #fff;
        border: 1px solid #000;
        position: relative;
        left: 100px;
    }

    .div1_r, .div1_l{
        height: 200px;
        width: 3px;
        background-color: #000000;
        /* margin-top: 100px; */
        display: inline-block;
    }

    @keyframes mycolor1{
        0%{
            background-color: #ffc602;
            transform-origin: 100% 0%;
            transform: rotate(0deg);
        }
        25%{
            background-color: #1363bc;
            transform-origin: 100% 0%;
            transform: rotate(270deg);
        }
        50%{
            background-color: #cf0fff;
            transform-origin: 100% 0%;
            transform: rotate(540deg);
        }
        75%{
            background-color: #000000;
            transform-origin: 100% 0%;
            transform: rotate(810deg);
        }
        100%{
            background-color: #ffc602;
            transform-origin: 100% 0%;
            transform: rotate(1080deg);
        }
    }

    @keyframes div1Rotate{
        0%{
            background-color: #ffc602;
            transform-origin: 100% 0%;
            transform: rotate(0deg);
            position: relative;
            left: 0px;
            width: 200px;
            opacity: 1;
        }
        25%{
            background-color: #cf0fff;
            transform-origin: 100% 0%;
            transform: rotate(-26.5deg);
            position: relative;
            left: -17.5px;
            width: 235px;
            opacity: 1;
        }
        50%{
            background-color: #cf0fff;
            transform-origin: 100% 0%;
            transform: rotate(-45deg);
            width: 300px;
            position: relative;
            left: -40px;
            opacity: .8;
        }
        75%{
            background-color: #cf0fff;
            transform-origin: 100% 0%;
            transform: rotate(-64.5deg);
            width: 225px;
            position: relative;
            left: -15px;
            opacity: .8;
        }
        100%{
            background-color: #ffc602;
            transform-origin: 100% 0%;
            position: relative;
            left: 0px;
            transform: rotate(-90deg);
            width: 200px;
            opacity: 0;
        }
    }



    .div1{
        /* -webkit-animation-name: mycolor1; */
        -webkit-animation-name: div1Rotate;
        -webkit-animation-duration: 6s;
        -webkit-animation-timing-function: linear;
        /* -webkit-animation-iteration-count: infinite; */
    }
    /* .div2{
        width: 200px;height: 200px;background-color: #ffc602;
        margin-top: 100px;
        display: inline-block;

    } */
    @-webkit-keyframes mycolor{
        0%{
            background-color: #ffc602
        }
        20%{
            background-color: #1363bc;
                -webkit-transform: translateY(-10px);
                height: 210px;
        }
        40%{
            background-color: #cf0fff;
                -webkit-transform: translateY(-20px);
                height: 220px
        }
        60%{
            background-color: #810977;
            -webkit-transform: translateY(-30px);
            height: 230px
        }
        80%{
            background-color: #c91f10;
                -webkit-transform: translateY(-40px);
                height: 240px
        }
        100%{
            background-color: #ffc602;
                -webkit-transform: translateY(-50px);
                height: 250px
        }

    }
    .div2:hover{
        -webkit-animation-name: mycolor;
        -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
    }
    .div3{
        height: 40px;width: 40px;background-color: #08446d;
        display: inline-block;
    }
    .div3:hover{

    }
</style>