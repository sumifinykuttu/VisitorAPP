import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Camera } from 'ionic-native';
import { App, ViewController } from 'ionic-angular';
import {FormControl} from '@angular/forms';
import {AppService} from './home.service'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AppService]
})

export class HomePage {
status: boolean = false;
employee: boolean = false;
details: boolean = false;
pass: boolean = false;
image : any = '';
 today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';
	searchTerm: FormControl = new FormControl();

  	searchResult = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,   public viewCtrl: ViewController,private service: AppService,public http: Http,
      public appCtrl: App) {
     	this.searchTerm.valueChanges
   		.debounceTime(400) 
   		.subscribe(data => {
   			this.service.search_word(data).subscribe(response =>{
   				console.log(response);
   				this.searchResult = response
   			})
   		});
       
  }
    todo = {};
        logForm() {
          console.log('submit form');
    this.status = true;
     this.employee = true;
      this.details = false;
  }
          photoPage() {
          console.log('photo form');
    this.status = true;
     this.employee = false;
      this.details = true;
  }
            printPreview() {
          console.log('print form');
    this.status = true;
     this.employee = false;
      this.details = false;
      this.pass=true
  }

       capture() {
    Camera.getPicture({
      quality: 100,
      destinationType: 0, // DATA_URL
      sourceType: 1,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      targetWidth: 200,
      targetHeight: 200,
      encodingType: Camera.EncodingType.PNG,
      mediaType: Camera.MediaType.PICTURE
    }).then((imageData) => {
     this.image = 'data:image/jpeg;base64,'+imageData;
     
    }, (err) => {
      console.log(`ERROR -> ${JSON.stringify(err)}`);
    });
  // });
    }
    sendEmail(){
     const email = 'sulai.sumi@corp.sysco.com';
   this.http.post("https://us-central1-sampleservice-c9f34.cloudfunctions.net/visitor/api/notify/email",email).
    subscribe(data=>{   
     console.log('data');
      
    }); 
    }
}