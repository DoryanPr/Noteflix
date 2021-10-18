import {Injectable} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {BehaviorSubject} from "rxjs";
import {Commentary} from "../../models/commentary.model";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series: BehaviorSubject<Array<Serie>>;

  constructor() {

    const seriesToPush = [
      new Serie(
        'Squid game',
        new Date(2010,12,26),
        4,
        'Quatre cent cinquante-six personnes, qui ont toutes des difficultés financières dans la vie, sont invitées à prendre part à une mystérieuse compétition de survie. Participant à une série de jeux traditionnels pour enfants mais avec des rebondissements mortels, ils ont risqué leur vie pour concourir pour un prix 45.6 milliards de won ₩ (32 millions d\'euros €). ',
        'Squid Game est une série télévisée dramatique de survie sud-coréenne en streaming écrite et réalisée par' +
        ' Hwang Dong-hyuk', [
          new Commentary(new Date(2010,12,26), 'Trump', 'commentaire sur la Série Squid Game'),
          new Commentary(new Date(2010,12,26), 'Hillary', 'commentaire sur la Série Squid Game'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABb4n_dSBUV_nMhOuhWXj0Eqs1tTsyY7ZZrANxOxN3cG9BHchzCEAwLKRKvXiWxKPGhNkI1RZ9ftQCD4hRGb1NOagAMfrT7qDws1vkVC9qyj3jEAm4tCffAIdMl1Pp4ssiHRt5aQ27ea45SK2ewM9SR8U93fSOjg-HYL52vVDKtT3biegn5bwl3OYmfmyao-Emfq1PFja.jpg?r=b55"),
      new Serie(
        'Sex Education',
        new Date(2010,12,26),
        4,
        'Le jeune Otis Milburn, dont la mère est thérapeute / sexologue, refuse les questions ou conseils de celle-ci à propos de sa propre sexualité, alors qu\'il est vierge et qu\'il ne parvient pas à se masturber. Par un concours de circonstances, Otis se retrouve à aider la terreur du lycée, Adam, qui a pour sa part des problèmes d\'éjaculation. Témoin de cette thérapie improvisée, Maeve Wiley, une jeune rebelle qui vit sans parents et a des problèmes d\'argent, propose à Otis de créer un « cabinet de sexologie » au sein du lycée.',
        'Une série progressiste et tendre, peuplée de personnages inattendus et particulièrement attachants incarnés pour la plupart par de jeunes acteurs inconnus vraiment prometteurs. A la fois très drôle et par moment très émouvante, cette fiction est un excellent divertissement',
        [
          new Commentary(new Date(2010,12,26), 'Michel Polnareff', 'commentaire sur la Série Sex Education'),
          new Commentary(new Date(2010,12,26), 'Franky', 'commentaire sur la Série Sex Education'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABe-2zdYoanmMDWxakCIehTYWNPH-MML_SC4mklQA4_gkVWlGp9QpIkEmsX2OFx6VuCKRbw4DvzA6HnzmjGRnPGm-wsawMIaIufr9oR4n3ZfBgnfOTwnxg8c3TKa5zjDs0Fsk2T-V07mJ_fs8JVbZM8yHN9peZgo0evOVn2y-oM5YuTIO9gGH122HCqoayerJYAQv-az5aMuKm4wqP076NVzOan28h5kmFwhecLmIjg.jpg?r=13f"),
      new Serie(
        'La casa de papel',
        new Date(2010,12,26),
        4,
        'Un homme mystérieux, surnommé le Professeur3, planifie le meilleur braquage jamais réalisé. Pour exécuter son plan, il recrute huit des meilleurs malfaiteurs en Espagne qui n\'ont rien à perdre.\n' +
        '\n' +
        'Le but est d\'infiltrer la Fabrique nationale de la monnaie et du timbre afin d\'imprimer 2,4 milliards d\'euros, en petites coupures de 50 € et cela en moins de onze jours, sans victimes — malgré la présence de 67 otages, dont la fille de l\'ambassadeur du Royaume-Uni, Alison Parker. ',
        'Très bonne série espagnole. Il faut voir les 2 premières saisons uniquement. La suite n\'a aucun intérêt. Éviter absolument le saison 3 qui est nullissime. ',
        [
          new Commentary(new Date(2010,12,26), 'Doryan', 'commentaire sur la Série La casa dde papel'),
          new Commentary(new Date(2010,12,26), 'Sylvia', 'commentaire sur la Série La casa dde papel'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABUO6Xn620NMHpbnNcj0taNFwSzi-3fQcDtyk6UybQLQimqDH_RnLQxzLsWZthtbEbdfcv3NfoW8tT5gYxh5xxe9G1rsfYLnPSGMD5Ovf4noxTljfOsT6X-GveXN5CGDHA2hTek7IaDH1jH3VXfaTzeyzQ_hp1nMPo4IOqWrPiUyztTmCdO9oriRwuJT1kpHlXKzw70SCOpPUcS5L0DGOggPclMSx6fQ4g6M63YSIrg.jpg?r=c75"),
      new Serie(
        'Into the night',
        new Date(2010,12,26),
        4,
        'Description 4',
        'critique 4',
        [
          new Commentary(new Date(2010,12,26), 'Gustave', 'commentaire sur la Série Into the Night'),
          new Commentary(new Date(2010,12,26), 'Mario', 'commentaire sur la Série Into the Night'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABeBplAiKVvVV3S11-0q2_H-dVOvjKxItDKAKsbq1egESF_ayP_1QfAglYoY8Ow5FOtjx2AZ8ODtHglkU24VN8LcliXihJ2x6gVVjkq4-YVMeUNkBsT-LcDiQriFoC1JHEmyiDiYBXen4crKLWbHAIjm2NuncKFzf08OwauphKG7PzMfvjYaRDxi62TjrSnnZbSu0idgElVo8Hmmh9el-NIHy1nwno4CS5v-1RbydeA.jpg?r=6ba"),
      new Serie(
        'Kate',
        new Date(2010,12,26),
        4,
        'Description 5',
        'critique 5',
        [
          new Commentary(new Date(2010,12,26), 'Edouard', 'commentaire sur la Série Kate'),
          new Commentary(new Date(2010,12,26), 'Gimli', 'commentaire sur la Série Kate'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABReCxCOwstvQpyhZy-1RyRpFJZbfSWvbNcoIJ7ATP4i8-CSOHYFAxOiFVp7jHEHAdB69rGtjSs1u61uX8dBYdSP4rdPZ_1c2HCERN0y76CFZ1znexXvnmbEkjgvja2-QTXSS0666SN0RhXvV1cYQWQJuncBDKG5HcvDSvl8HQBxTMaKtQNmXQeUbiy6FhVOMlxAAmTCB.jpg?r=3bd"),
      new Serie(
        '13 Novembre',
        new Date(2010,12,26),
        4,
        'Description 6',
        'critique 6',
        [
          new Commentary(new Date(2010,12,26), 'Coralie', 'commentaire sur la Série 13 Novembre'),
          new Commentary(new Date(2010,12,26), 'Johnny', 'commentaire sur la Série 13 Novembre'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABVgFlGxK34MieP7NMjr-JMnnWyryb6IK9wHoe2HfnTx641FebQMwfnhReXUCBpN3Zm_Ro5d2Tu7XgNGMwQC2bCkc-EHQZthOtm2hJ7tmLf30w-Uup7zJP2U7H3aVV7cU4pr-7RGUgwEjr276_-aMkpcq-RMoWhMnd02boBHvEndfr-PxcsnBbF5bS2DP8bTThkBlQ78Y.jpg?r=b06"),
      new Serie(
        'Lucifer',
        new Date(2010,12,26),
        4,
        'Description 7',
        'critique 7',
        [
          new Commentary(new Date(2010,12,26), 'Jacqueline', 'commentaire 1 sur la Série Lucifer'),
          new Commentary(new Date(2010,12,26), 'Jacqo', 'commentaire 1 sur la Série Lucifer'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABTvKwKCvXXndXqvoXtTdzTNWI4termCIx6c1VMdbMueyWDD8W4UYVldyiBFy96Xf6mTv7ACadciuGSecoFdN30HvUWCrhp2o783F12Hvkj-OxJahPcOgTt8fV5r9ziopiQJvi03brP2gMELs7GjmtfRtxIHdV5MhAIm8S8NoctEb4l4cbOqy_n-Lq06_U-GxhsGzkh94tmieF9layKEfU3bNcLpEhGvsgv4Gc3NcrA.jpg?r=461"),
      new Serie(
        'Sweet girl',
        new Date(2010,12,26),
        4,
        'Description 8',
        'critique 8',
        [
          new Commentary(new Date(2010,12,26), 'Manu', 'commentaire sur la Série sweet girl'),
          new Commentary(new Date(2010,12,26), 'Mika', 'commentaire 2 sur la Série sweet girl'),

        ],
        "https://occ-0-3474-56.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABYQAD-D_UFHbM8hr1YfaNpWUJ8-GvrNvVtjKPCMGW85FgFiF0qYkJqs55C-J3SAZtI6P-IJYNZQJ4kMfrbyVIOqrKloEPSmrmbNleIVWfo2uKiqURYpH5whODJ1gzxy0zvDoKd1Ez1ynQ4u9BKvZ7EdY_xhuIqWSFEVhMBH12weYgiE6efFKTKznLyRD8_UmbTHkCAB4.jpg?r=d50"),
    ];
    this.series = new BehaviorSubject<Array<Serie>>(seriesToPush)

  }

  /**
   * search One Serie By ID
   * @param serieId
   */
  getSerieById(serieId: number): Promise<Serie> {
    return new Promise<Serie>((res, rej) => {
      const series = this.series.getValue();
      for (let serie of series) {
        if (serie.id === serieId) {
          res(serie);
          break;
        }
      }
    })
  }

  /**
   * Add new Serie
   * @param serieToAdd
   */
  addSerie(serieToAdd: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const series = this.series.getValue();
        series.push(serieToAdd);
        this.series.next(series);
        res();
      }, 500);
    });
  }

  /**
   * Edit one serie
   * @param editedSerie
   */
  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const series = this.series.getValue();
        for (let [index, serie] of series.entries()) {
          if (serie.id === editedSerie.id) {
            series[index] = editedSerie;
            res();
            break;
          }
        }
      }, 500)
    })
  }

  /**
   * Add commentary in a Serie
   * @param commentaryToAdd
   * @param serieId
   */
  addCommentary(commentaryToAdd: any, serieId: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const series = this.series.getValue();
        for (let [index, serie] of series.entries()) {
          if (serie.id === serieId) {
            series[index].commentaries.push(commentaryToAdd);
            res();
            console.log(series[index].commentaries)
            break;
          }
        }
      }, 500);
    })
  }
}
