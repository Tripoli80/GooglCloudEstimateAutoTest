import calculatorPage from "../pageobjects/calculator.page";

export const testData = {
  search: "Google Cloud Platform Pricing Calculator",
};

export const validationData = {
  searchPage: "https://cloud.google.com/s/results",
  calculatorPage: "https://cloud.google.com/products/calculator",
  calculatorTitle: "Welcome to Google Cloud's pricing calculator",
  estimated: {
    machineType: "n1-standard-8, vCPUs: 8, RAM: 30 GB",
    gpuModel: "NVIDIA V100",
    localSSD: "2x375 GB",
    numberInstance: "4",
    OS: "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)",
    provisionModel: "Regular",
    addGpu: "true",
    region: "europe-west4",
    commitedDiscount: "1 year",
    price: "$5,628.90",
  },
};
export const selectors = {
  serchItem: "//div//a[@href='https://cloud.google.com/products/calculator']/b",
  calculatorTitle: "//h1",
  addEstimate: "//button[@data-idom-class='VVEJ3d']",
  computeEngine: "//div[@data-service-form='8']",
  titelCalPageCE: "//h1[@aria-label]",
  instanceInput: "//input[@jsname='YPqjbf']",
  osList: "//span[contains(text(), 'Operating System / Software')]/../../..",
  osVarios:
    "//li[@data-value='free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license']",
  vmClass: "//label[text()='Regular']/..",
  instanceTypeList: "//span[contains(text(), 'Machine type')]/../../..",
  instanceTypeVarios: "//li[@data-value='n1-standard-8']",
  gpu: "//button[@aria-label='Add GPUs']",
  gpuList: "//span[contains(text(), 'GPU Model')]/../../..",
  gpuVarios:
    "//ul[@aria-label='GPU Model']//li[@data-value='nvidia-tesla-v100']",
  ssdList: "//span[contains(text(), 'Local SSD')]/../../..",
  ssdVarios: "//ul[@aria-label='Local SSD']//li[@data-value='2']",
  regionList: "//span[text()='Region']/../../..",
  regionVarios: "//li[@data-value='europe-west4']",
  comitedUseg: "//label[contains(text(), '1 year')]/..",
  viewEstimate: "//a[@aria-label='Open detailed view']",
  calculatingIsUpdated: "//div[text()='Service cost updated']",
  estimated: {
    // title: "//head/title",
    subtitle: "//h4[text()='Cost Estimate Summary']",
    machineType: "//span[text()='Machine type']/../span[@class='Kfvdz']",
    gpuModel: "//span[text()='GPU Model']/../span[@class='Kfvdz']",
    localSSD: "//span[text()='Local SSD']/../span[@class='Kfvdz']",
    numberInstance:
      "//span[text()='Number of Instances']/../span[@class='Kfvdz']",
    OS: "//span[text()='Operating System / Software']/../span[@class='Kfvdz']",
    provisionModel:
      "//span[text()='Provisioning Model']/../span[@class='Kfvdz']",
    addGpu: "//span[text()='Add GPUs']/../span[@class='Kfvdz']",
    region: "//span[text()='Region']/../span[@class='Kfvdz']",
    commitedDiscount:
      "//span[text()='Committed use discount options']/../span[@class='Kfvdz']",
    price: "//h6[text()='Total estimated cost']/../div/h6",
  },
};
