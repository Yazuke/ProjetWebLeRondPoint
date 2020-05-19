import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any;


@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.scss']
})
export class ReserverComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

    $('#datein, #dateout').datepicker({
      format: 'dd/mm/yyyy',
      todayBtn: 'linked',
      clearBtn: true,
      language: 'fr',
      orientation: 'bottom left'
    });
    const input = $('.validate-input .input100');

    // tslint:disable-next-line:only-arrow-functions
    $('.validate-form').on('submit', function(){
      let check = true;

      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < input.length; i++) {
        if (validate(input[i]) === false){
          showValidate(input[i]);
          check = false;
        }
      }
      if (check === true){
        sendMail();
      }
      return check;
    });

    function sendMail(){
      const data = {
        prenom : $(input[0]).val(),
        nom : $(input[1]).val(),
        email : $(input[2]).val(),
        tel : $(input[3]).val(),
        adultes : $(input[4]).val(),
        enfants : $(input[5]).val(),
        logement : $(input[6]).val(),
        datein : $(input[7]).val(),
        dateout : $(input[8]).val(),
        message : $(input[9]).val()
      };
    }


    $('.validate-form .input100').each(function(){
      $(this).focus(function(){
        hideValidate(this);
      });
    });

    function validate(a) {
      if ($(a).attr('type') === 'email' || $(a).attr('name') === 'email') {
        if ($(a).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          return false;
        }
      }
      else {
        if ($(a).val().trim() === '' && $(a).attr('name') !== 'message'){
          return false;
        }
      }
    }


    function showValidate(a) {
      const thisAlert = $(a).parent();

      $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(a) {
      const thisAlert = $(a).parent();

      $(thisAlert).removeClass('alert-validate');
    }
  }
}
