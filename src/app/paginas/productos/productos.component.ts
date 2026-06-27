import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  Productos : Producto[] = [
    {
      id : 1,
      nombre: 'Skeleton Knife | Doppler',
      descripcion:'.',
      precio:2150.00,
      imagen:'https://skins-cdn.hltv.org/skin/nTCvrxb8jn63wVwOgUjfjk.png',
      disponibilidad:true
    },
    {
id:2,
nombre:'M9 Bayonet | Doppler (RUBY)',
descripcion:'.',
precio:6500.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Wts2sab1iLvWHMWad_vxjsvhWQiihlxEiuieAnrD1KCzPKhhyX5sjE7MLtRnuxNbjYb-x7gDWiYMTmCms2HlI7H065bsCUPF0-afUkUifZqukeTAH',
disponibilidad:true
},

{
id:3,
nombre:'Butterfly | Doppler (RUBY)',
descripcion:'.',
precio:10000,
imagen:'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Z-ua6bbZrLOmsD2qv0_t0qd5kTjuxmRguqTiBpYPwJiPTcAcnCsF0FLFcsRHtwNy0Neji41aKiNhAzyqsjyxK7X5o4u8GB_UmrPDJz1aWz8iftUI',
disponibilidad:true
},

{
id:4,
nombre:'Talon | Fade',
descripcion:'.',
precio:750.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aa_fade_light_large.54c2c841e44a279e001873f80f987885780bb156.png',
disponibilidad:true
},
{
id:5,
nombre:'Falchion | Gamma Doppler (EMERALD)',
descripcion:'.',
precio:725.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_am_emerald_marbleized_light_large.86b54169ca00cfa482715e49b558e9e74776a669.png',
disponibilidad:true
},

{
id:6,
nombre:'Karambit | Doppler (RUBY)',
descripcion:'.',
precio:2750.00,
imagen:'https://pub-5f12f7508ff04ae5925853dee0438460.r2.dev/data/images/wiki_W2yOMPY_preview.png',
disponibilidad:true
},

{
id:7,
nombre:'AK-47 | Vulcan',
descripcion:'.',
precio:120.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_large.5836c38d3037a5a1f90ffdc8c9d0b94367ca8efd.png',
disponibilidad:true
},
{
id:8,
nombre:'AK-47 | Asiimov',
descripcion:'.',
precio:48.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F6ueZhW2e2wEt-t2jcytf6dymSO1JxA5oiRecLsRa5kIfkYr-241aLgotHz3-rkGoXuUp8oX57',
disponibilidad:true
},

{
id:9,
nombre:'AK-47 | The oligarch',
descripcion:'.',
precio:122.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQu6WReLFrJvWBMWSF0vp5vd5lRi67gVNz4Tvdn4qoJC3Ba1V1WcdxTbFcsEbpxoHhNunnsVPYitlFm3392C4f8G81tEVBuxrI/512fx384f',
disponibilidad:true
},

{
id:10,
nombre:'AK-47 | Wild Lotus',
descripcion:'.',
precio:3500.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV61-LPGdCliWzeFkse1WQyC0nQlpsDuGyt-pdnyRPA4hDcYkR-QPuhi-wdPuYbyx5AaMidkQnC_-2ilIuzErvbi4ijV5Mw',
disponibilidad:true
},
{
id:11,
nombre:'AK-47 | Inheritance',
descripcion:'.',
precio:110.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQ0OKheqdoLPGaAFicyOl-pK8xGH_nwUt1sGrSz9ivcHKQOAcjXMYkRu5Yuxe4lYCyZOq25VSM2oMT02yg2UxBSEgA/512fx384f',
disponibilidad:true
},

{
id:12,
nombre:'AK-47 | B the Monster',
descripcion:'.',
precio:93.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0P24bbZ9IeOAMWqfz_1itfNWTiLnwiIrujqNjsGocC6QPQNyA8FxReZYtEHrw4ezMe_nsgbWjYIXni782ipA5yxv5OkET-N7rajaE730',
disponibilidad:true
},

{
id:13,
nombre:'M4A4-S | Fade',
descripcion:'.',
precio:295.00,
imagen:'https://skins-cdn.hltv.org/skin/dtHve7Fa-_uyen5axEDEqA.png',
disponibilidad:true
},

{
id:14,
nombre:'M4A4-S | Printsrteam',
descripcion:'.',
precio:147.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_F7Rienhgk1tjyIpYPwJiPTcAAoCpsiEO5ZsUbpm9C2Zuni4VHW3o5EzSX62HxP7Sg96-hWVqYi_6TJz1aW0nxrkGs',
disponibilidad:true
},
{
id:15,
nombre:'M4A4-S | Cyrex',
descripcion:'.',
precio:158.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.144b4053eb73b4a47f8128ebb0e808d8e28f5b9c.png',
disponibilidad:true
},

{
id:16,
nombre:'M4A4-S | Icarius',
descripcion:'.',
precio:572.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/class/730/2497633562',
disponibilidad:true
},

{
id:17,
nombre:'M4A4-S | Hyper Beast',
descripcion:'.',
precio:103.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1_hyper_beast_light_large.31850937661935a062d5f6faf5a1f02fdb90b861.png',
disponibilidad:true
},

{
id:18,
nombre:'M4A4-S | Vaporwave',
descripcion:'.',
precio:50.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_3HDzaD_vh3oO57WCilkCIrujqNjsH_In7DZgYnWcAiR-MJshO6koDlN7vhsQyLi41HySX6iXlAvCZrsb0HT-N7rW-9qIHE/512fx384f',
disponibilidad:true
},
{
id:19,
nombre:'AWP | Dragon Lore',
descripcion:'.',
precio:4650.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk4veqYaF7IfysCnWRxuF4j-B-Xxa_nBovp3Pdwtj9cC_GaAd0DZdwQu9fuhS4kNy0NePntVTbjYpCyyT_3CgY5i9j_a9cBkcCWUKV',
disponibilidad:true
},

{
id:20,
nombre:'AWP | Gungnir',
descripcion:'.',
precio:6220.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6N4LvedB3WvzedxuPUnHnjnzUl0sWrdztitI3rDZgJzAsZ1QOFY4UPqldDgMO_l41HXit9AmTK-0H227dAsvQ',
disponibilidad:true
},

{
id:21,
nombre:'AWP | Printstream',
descripcion:'.',
precio:170.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OK8Yap5M-SBC2ad_uJ_t-l9AX_qlk4k5GyAzo6ocC-QZgZxX8AjEbZY5xnrxtPjM7vnsgGIj9oTmXngznQeg3pfcPs',
disponibilidad:true
},

{
id:22,
nombre:'AWP | Wildfire',
descripcion:'.',
precio:85.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7NkLPSVB3WV_uJ_t-l9AX7rxhl-tmzSwomtdC6TPwQnW5UkR-YD5kK-ltCzP-Ox4FfXiNoQyyrgznQeu9L0PzQ',
disponibilidad:true
},
{
id:23,
nombre:'Desert Eagle | Printstream',
descripcion:'.',
precio:79.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha7kBwxqnPQnNmqcSrCPVVzDJB3ROVZ5xLpkIbvY-qws1CLgo5Dny783HtK6yts_a9cBrhYI1Ka',
disponibilidad:true
},

{
id:24,
nombre:'Desert Eagle | Blaze',
descripcion:'.',
precio:710.00,
imagen:'https://steamdb.com/assets/images/skins/cs2/skins/desert-eagle-blaze.png',
disponibilidad:true
},

{
id:25,
nombre:'Desert Eagle | Code Red',
descripcion:'.',
precio:138.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_aggressor_light_large.51ffb87f03ae0d3c467d4412f3c246067748e61d.png',
disponibilidad:true
},

{
id:26,
nombre:'USP-S | Printstream',
descripcion:'.',
precio:112.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_v5kue99XD2hkBwqjDGMnYftb3yUPFR0XsNyRrNc5kO5ltziMenr5lONj4kXyi2riywc7y9o5LtQAqQ7uvqAkScWnv4',
disponibilidad:true
},
{
id:27,
nombre:'USP-S | Kill Confirmed',
descripcion:'.',
precio:275.00,
imagen:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_large.a3a7b8f19c9fb931b18c1edd7dd21d44e2c3c2e0.png',
disponibilidad:true
},

{
id:28,
nombre:'USP-S | Neo-Noir',
descripcion:'.',
precio:113.00,
imagen:'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA0tF4v-h7cCW6khUz_WXdmd-vI3uRPwEkApR4QuBcu0Xrk4biYr_mtQXdidlCz3r63Ska7Hx1o7FVWuokIcU',
disponibilidad:true
},

{
id:29,
nombre:'GLOCK-18 | Gamma Doppler',
descripcion:'.',
precio:375.00,
imagen:'https://steamcommunity-a.akamaihd.net/economy/image/class/730/7993039096',
disponibilidad:true
},

{
id:30,
nombre:'GLOCK-18 | Fully Tuned',
descripcion:'.',
precio:245.00,
imagen:'https://case.oki.gg/_next/image?url=https%3A%2F%2Fcommunity.akamai.steamstatic.com%2Feconomy%2Fimage%2Fi0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tnJOCWC2yvzedxuPUnS3HqzR9152_UyNigeSqWa1BxW8ElRLJfshfpkNHuZO_n4ADd2IxBxDK-0H3ID5Y8zA&w=1920&q=40',
disponibilidad:true
}

    
  ]
  constructor(private carritoService: CarritoService){}
  ngOnInit(){

window.scrollTo(
0,
0
);

}
  

  //Metodo para agregar un producto

  agregar(producto:Producto){
    this.carritoService.agregarAlcarrito(producto)
    alert('Producto agregado al carrito')

  }
}
