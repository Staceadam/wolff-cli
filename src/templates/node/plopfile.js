const plops = function (plop) {
  // controller generator
  plop.setGenerator('module', {
    description: 'Adds a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is the name of the new module?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}.ts',
        templateFile: 'plop-templates/module.hbs',
      },
      {
        type: 'append',
        path: 'src/modules/index.ts',
        separator: '\r',
        template: `export * from './{{kebabCase name}}'`,
      },
    ],
  })

  plop.setGenerator('util', {
    description: 'Adds a new util',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is the name of the new util?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/utils/{{kebabCase name}}.ts',
        templateFile: 'plop-templates/util.hbs',
      },
      {
        type: 'append',
        path: 'src/utils/index.ts',
        separator: '\r',
        template: `export * from './{{kebabCase name}}'`,
      },
    ],
  })

  plop.setGenerator('test', {
    description: 'Adds a new test',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is the name of the new test?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'tests/{{kebabCase name}}.ts',
        templateFile: 'plop-templates/test.hbs',
      },
    ],
  })
}

module.exports = plops
