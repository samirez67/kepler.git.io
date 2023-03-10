// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// Add english messages here, other languages will use these
// if translations not available for every message
const en = {
  'modal.loadData.remote': 'Load Map using URL',
  'sampleMapsTab.noData': 'No data ?',
  'sampleMapsTab.trySampleData': 'Try sample data',
  'sampleDataViewer.rowCount': ' {rowCount} rows',
  'loadRemoteMap.description': 'Load your map using your custom URL',
  'loadRemoteMap.message':
    'You can use the following formats: CSV | JSON | Kepler.gl config json. Make sure the url contains the file extension.',
  'loadRemoteMap.examples': 'Examples:',
  'loadRemoteMap.cors':
    '* CORS policy must be defined on your custom url domain in order to be accessible. For more info ',
  'loadRemoteMap.clickHere':
    '<a rel="noopener noreferrer" target="_blank" href="{corsLink}">click here</a>',
  'loadRemoteMap.fetch': 'Fetch'
};

export const messages = {
  en,
  fi: {
    'modal.loadData.remote': 'Lataa kartta URL-osoitteen avulla',
    'sampleMapsTab.noData': 'Ei aineistoja?',
    'sampleMapsTab.trySampleData': 'Kokeile testiaineistoja',
    'sampleDataViewer.rowCount': ' {rowCount} rivi??',
    'loadRemoteMap.description': 'Lataa karttasi k??ytt??m??ll?? omaa urlia',
    'loadRemoteMap.message':
      'Voit k??ytt???? formaatteja: CSV | JSON | Kepler.gl asetus-json. Varmista, ett?? url sis??lt???? tiedostop????tteen nimen.',
    'loadRemoteMap.examples': 'Esimerkkej??:',
    'loadRemoteMap.cors':
      '* CORS-k??yt??nt?? pit???? olla m????riteltyn?? urlin domainissa, jotta aineiston voi ladata.',
    'loadRemoteMap.clickHere':
      '<a rel="noopener noreferrer" target="_blank" href="{corsLink}">Lis??tietoja</a>',
    'loadRemoteMap.fetch': 'Nouda'
  },
  ca: {
    'modal.loadData.remote': 'Carrega mapa mitjan??ant URL',
    'sampleMapsTab.noData': 'Cap dada?',
    'sampleMapsTab.trySampleData': 'Prova dades de mostra',
    'sampleDataViewer.rowCount': ' {rowCount} files',
    'loadRemoteMap.description': 'Carrega el teu mapa amb la teva URL personalitzada',
    'loadRemoteMap.message':
      "Pots emprar els seg??ents formats: CSV | JSON | Kepler.gl config json. Assegura't que la URL contingui l'extensi?? de l'arxiu.",
    'loadRemoteMap.examples': 'Exemples:',
    'loadRemoteMap.cors':
      '* La pol??tica CORS s???ha de definir al teu domini per tal que sigui accessible. Per a m??s informaci?? ',
    'loadRemoteMap.clickHere':
      '<a rel="noopener noreferrer" target="_blank" href="{corsLink}">fes clic aqu??</a>',
    'loadRemoteMap.fetch': 'Cerca'
  },
  es: {
    'modal.loadData.remote': 'Cargar mapa usando URL',
    'sampleMapsTab.noData': 'Ning??n dato?',
    'sampleMapsTab.trySampleData': 'Prueba datos de muestra',
    'sampleDataViewer.rowCount': ' {rowCount} files',
    'loadRemoteMap.description': 'Carga tu mapa con tu enlace personalizado',
    'loadRemoteMap.message':
      'Puedes usar los siguientes formatos: CSV | JSON | Kepler.gl config json. Asegurate que el enlace contenga la extensi??n del archivo.',
    'loadRemoteMap.examples': 'Ejemplos:',
    'loadRemoteMap.cors':
      '* La pol??tica CORS debe ser definida en tu dominio para que sea accessible. Para m??s informaci??n ',
    'loadRemoteMap.clickHere':
      '<a rel="noopener noreferrer" target="_blank" href="{corsLink}">haz clic aqu??</a>',
    'loadRemoteMap.fetch': 'Busca'
  },
  cn: {
    'modal.loadData.remote': '?????? URL ????????????',
    'sampleMapsTab.noData': '???????????????',
    'sampleMapsTab.trySampleData': '??????????????????',
    'sampleDataViewer.rowCount': ' {rowCount} ???',
    'loadRemoteMap.description': '??????????????? URL ????????????',
    'loadRemoteMap.message':
      '??????????????????????????????CSV | JSON | Kepler.gl ?????? json??? ?????? url ????????????????????????',
    'loadRemoteMap.examples': '?????????',
    'loadRemoteMap.cors': '* ???????????????????????? url ???????????? CORS ??????????????????????????????????????????',
    'loadRemoteMap.clickHere':
      '<a rel="noopener noreferrer" target="_blank" href="{corsLink}">????????????</a>',
    'loadRemoteMap.fetch': '??????'
  }
};
