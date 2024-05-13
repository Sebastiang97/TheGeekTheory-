import { Request, Response } from "express";
import { UserService } from "../Domain/UserService";
import { UpdateUser } from "../Application/UpdateUser";
import { usersSchema } from "./SchemaValidation/UserSchema";
import { GetUsers } from "../Application/GetUsers";
import { transporter } from "../../../../store/email/mailer";

export class UserController {
    constructor(
        private service: UserService,
    ){
    }

    list = async (_: Request, res: Response, ) => {
        try {
            
            const info = await transporter.sendMail({
                from: 'The Geek Theory <ssebastiang97@gmail.com>', // sender address
                to: "jacksanabria17@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                 <head>
                  <meta charset="UTF-8">
                  <meta content="width=device-width, initial-scale=1" name="viewport">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta content="telephone=no" name="format-detection">
                  <title>New Message</title><!--[if (mso 16)]>
                    <style type="text/css">
                    a {text-decoration: none;}
                    </style>
                    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                  <style type="text/css">
                #outlook a {
                    padding:0;
                }
                .es-button {
                    mso-style-priority:100!important;
                    text-decoration:none!important;
                }
                a[x-apple-data-detectors] {
                    color:inherit!important;
                    text-decoration:none!important;
                    font-size:inherit!important;
                    font-family:inherit!important;
                    font-weight:inherit!important;
                    line-height:inherit!important;
                }
                .es-desk-hidden {
                    display:none;
                    float:left;
                    overflow:hidden;
                    width:0;
                    max-height:0;
                    line-height:0;
                    mso-hide:all;
                }
                @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
                @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
                </style>
                 </head>
                 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
                            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                <v:fill type="tile" color="#fafafa"></v:fill>
                            </v:background>
                        <![endif]-->
                   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
                     <tr>
                      <td valign="top" style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td class="es-info-area" align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
                             <tr>
                              <td align="left" style="padding:20px;Margin:0">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">View online version</a></p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                             <tr>
                              <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_887f48b6a2f22ad4fb67bc2a58c0956b/images/93351617889024778.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px" width="200" title="Logo"></td>
                                     </tr>
                                     <tr>
                                      <td style="padding:0;Margin:0">
                                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr class="links">
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Shop</a></td>
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">New</a></td>
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Sale</a></td>
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">About</a></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img class="adapt-img" src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/13381617966960434.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="330"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:20px"><h1 style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#333333">OUR BEST OFFER</h1></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Care about nature? Wanna help Mother Earth stay green?&nbsp;</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Meet our collection of apparel made from cotton.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#5c68e2;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" class="es-button es-button-1621620532140" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px;display:inline-block;background:#5C68E2;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2">SHOP NOW</a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" role="none">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;position:relative"><img class="adapt-img" src="https://fhnarkb.stripocdn.email/content/guids/bannerImgGuid/images/67541621621929489.png" alt title width="560" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:560px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:270px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:270px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/57181617968712989.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="35"></td>
                                     </tr>
                                     <tr>
                                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:15px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">100% cotton</h2></td>
                                     </tr>
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                       <ul>
                                        <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#333333;font-size:14px">Soft and breathable fabric. This means&nbsp;that air&nbsp;moves through pieces of apparel and moisture&nbsp;evaporates.</li>
                                        <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#333333;font-size:14px">Suitable&nbsp;for children and those who are allergic to synthetic fabrics. Looks expensive on you.</li>
                                        <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#333333;font-size:14px">Perfect for all seasons. Pairs good with all other fabrics that you have. Does not shrink easily.</li>
                                       </ul></td>
                                     </tr>
                                     <tr>
                                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="" class="es-button es-button-1621620532145" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffffff">LEARN MORE </a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:270px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/53131617968449691.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="270"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table></table><![endif]--></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/70271617968712393.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="35"></td>
                                     </tr>
                                     <tr>
                                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">Easy wash &amp; care</h2></td>
                                     </tr>
                                     <tr>
                                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                       <ul>
                                        <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#333333;font-size:14px">Easy to remove stains of all types: ink. butter, juices, cherries, coffee, chocolate, ice cream, oranges, etc.</li>
                                        <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#333333;font-size:14px">Add a half cup of vinegar to your washing machine when rinsing cotton items to kill the germs.</li>
                                        <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#333333;font-size:14px">Don't overdry cotton clothes and then you will not have to iron them. When washing, turn the clothes inside out.</li>
                                       </ul></td>
                                     </tr>
                                     <tr>
                                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="https://www.google.com/" class="es-button es-button-1621620532149" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffffff">LEARN MORE </a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:270px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/5721617968449692.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="270"></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="Margin:0;padding-bottom:5px;padding-top:15px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">Tips on how to take care of cotton, briefly</h2></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td class="es-m-p5b" align="left" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:197px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:167px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/89671617970513094.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="99"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Keep cotton clothes in drawers, away from the Sun.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Iron to kill the germs.</p></td>
                                     </tr>
                                   </table></td>
                                  <td class="es-hidden" style="padding:0;Margin:0;width:30px"></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:167px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:167px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/80471617970513099.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="98"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Easy to remove stains. Sort your clothes.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Check the label when washing.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:30px"></td><td style="width:166px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:166px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/90971617970513096.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="98"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Don't overdry.<br>Turn inside out when washing.<br>Use less detergent.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                             <tr>
                              <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
                                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #efefef;border-right:1px solid #efefef;border-top:1px solid #efefef;border-bottom:1px solid #efefef;border-radius:5px" role="presentation">
                                     <tr>
                                      <td align="center" style="padding:5px;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/40051617972024743.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="162"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:10px;padding-right:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">T-shirt</h3></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:10px;padding-right:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">Pairs with jeans, skirts.&nbsp;</p></td>
                                     </tr>
                                     <tr>
                                      <td style="padding:0;Margin:0">
                                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr class="images">
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/6321617972423213.png" alt="Color one" title="Color one" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/86171617972422570.png" alt="Color 2" title="Color 2" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/27291617972422659.png" alt="Color 3" title="Color 3" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/46851617972422027.png" alt="Color 4" title="Color 4" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">$19&nbsp;&nbsp;<span style="color:#999999"><s style="text-decoration:line-through">$25</s></span></h2></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="https://www.google.com/" class="es-button es-button-1621620532155" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:5px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffffff">BUY </a></span></td>
                                     </tr>
                                   </table></td>
                                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #efefef;border-right:1px solid #efefef;border-top:1px solid #efefef;border-bottom:1px solid #efefef;border-radius:5px" role="presentation">
                                     <tr>
                                      <td align="center" style="padding:5px;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/21671617972024739.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="161"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:10px;padding-right:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">&nbsp;Polo</h3></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:10px;padding-right:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">Wear for a walk.</p></td>
                                     </tr>
                                     <tr>
                                      <td style="padding:0;Margin:0">
                                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr class="images">
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/6321617972423213.png" alt="Color 1" title="Color 1" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/86171617972422570.png" alt="Color 2" title="Color 2" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/27291617972422659.png" alt="Color 3" title="Color 3" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/46851617972422027.png" alt="Color 4" title="Color 4" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">$29&nbsp;&nbsp;<span style="color:#999999"><s style="text-decoration:line-through">$35</s></span></h2></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="https://www.google.com/" class="es-button es-button-1621620532160" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:5px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffffff">BUY </a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid #efefef;border-right:1px solid #efefef;border-top:1px solid #efefef;border-bottom:1px solid #efefef;border-radius:5px" role="presentation">
                                     <tr>
                                      <td align="center" style="padding:5px;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/49861617972024146.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="161"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:10px;padding-right:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">Sweatshirt</h3></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:10px;padding-right:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">Wear to the office.</p></td>
                                     </tr>
                                     <tr>
                                      <td style="padding:0;Margin:0">
                                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr class="images">
                                          <td align="center" valign="top" width="25%" style="padding:0;Margin:0;padding-left:5px;padding-top:5px;padding-bottom:5px;border:0" id="esd-menu-id-0"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/6321617972423213.png" alt="Color 1" title="Color 1" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0" id="esd-menu-id-1"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/86171617972422570.png" alt="Color 2" title="Color 2" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0" id="esd-menu-id-2"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/27291617972422659.png" alt="Color 3" title="Color 3" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" width="25%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0" id="esd-menu-id-3"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/46851617972422027.png" alt="Color 4" title="Color 4" width="15" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-m-txt-c" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">$39&nbsp;&nbsp;<span style="color:#999999"><s style="text-decoration:line-through">$59</s></span></h2></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="https://www.google.com/" class="es-button es-button-1621620532163" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;padding:5px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffffff">BUY </a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:30px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><span class="es-button-border" style="border-style:solid;border-color:#5c68e2;background:#5c68e2;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a href="https://www.google.com/" class="es-button es-button-1621620532168" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px;display:inline-block;background:#5C68E2;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2">SHOP NOW</a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:143px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:133px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/17971617974647919.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">FREE <br>SHIPPING</p></td>
                                     </tr>
                                   </table></td>
                                  <td class="es-hidden" style="padding:0;Margin:0;width:10px"></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:143px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:133px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/80801617974647921.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">EASY <br>PAYMENT</p></td>
                                     </tr>
                                   </table></td>
                                  <td class="es-hidden" style="padding:0;Margin:0;width:10px"></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:132px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                 <tr>
                                  <td align="center" class="es-m-p20b" style="padding:0;Margin:0;width:132px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/77861617974647919.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">QUICK <br>RETURN</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td><td style="width:10px"></td><td style="width:132px" valign="top"><![endif]-->
                               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                 <tr>
                                  <td align="center" style="padding:0;Margin:0;width:132px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://fhnarkb.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/59831617975283573.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45"></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">QUALITY ASSURANCE</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table><!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                         <tr>
                          <td align="center" style="padding:0;Margin:0">
                           <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px" role="none">
                             <tr>
                              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="left" style="padding:0;Margin:0;width:600px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                       <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr>
                                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Facebook" src="https://fhnarkb.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Twitter" src="https://fhnarkb.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Instagram" src="https://fhnarkb.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                          <td align="center" valign="top" style="padding:0;Margin:0"><img title="Youtube" src="https://fhnarkb.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                     <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">Style Casual&nbsp;© 2021 Style Casual, Inc. All Rights Reserved.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">4562 Hazy Panda Limits, Chair Crossing, Kentucky, US, 607898</p></td>
                                     </tr>
                                     <tr>
                                      <td style="padding:0;Margin:0">
                                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                         <tr class="links">
                                          <td align="center" valign="top" width="33.33%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0"><a target="_blank" href="https://www.google.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Visit Us </a></td>
                                          <td align="center" valign="top" width="33.33%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:1px solid #cccccc"><a target="_blank" href="https://www.google.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Privacy Policy</a></td>
                                          <td align="center" valign="top" width="33.33%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:1px solid #cccccc"><a target="_blank" href="https://www.google.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Terms of Use</a></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                         <tr>
                          <td class="es-info-area" align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
                             <tr>
                              <td align="left" style="padding:20px;Margin:0">
                               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                     <tr>
                                      <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px"><a target="_blank" href="https://www.google.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>No longer want to receive these emails?&nbsp;<a href="" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">Unsubscribe</a>.<a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a></p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table>
                  </div>
                 </body>
                </html>`, 
              });
            console.log(info)
        } catch (error) {
            console.log({error})
        }
        return new GetUsers(this.service)
            .execute()
            .then(users =>{
                return res.status(200).json(users)
            })
            .catch(error=>{
                return res.status(400).json(error)
            })
    }

    getById = (_: Request, __: Response, ) => {
        return
    }

    create = (_: Request, __: Response, ) => {

    }

    getProducts = (_: Request, __: Response) =>{

    }

    update = (req: Request, res: Response) => {
        // return res.status(200).json({msg: "asdf"})

        const users = req.body
        const result = usersSchema.safeParse(users)
        if(!result.success){
            return res.status(400).json({error: 'El recurso enviado no cumple'})
        }
        return new UpdateUser(this.service)
            .execute(users)
            .then(usersEntity =>{
               return res.status(200).json(usersEntity)
            })
            .catch(error=>{
                console.log({error})
                return res.status(404).json({error})
            })
    }

    delete = (_: Request, __: Response, ) => {
        return
    }
}