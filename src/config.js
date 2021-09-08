export default {
    "default_prefix": "|",
    "default_emoji": null,
    "default_language": "eng",
    "default_doEmojis": false,
    "rule34_publication_limit": 200,
    "default_scan_limit": 100,
    "links_per_message": 10,
    "avatar_cooldown": 300000,
    "push_cooldown": 450000,
    "status_cooldown": 600000,
    "error_color": "#ff0000",
    "success_color": "#00ff00",
    "embed_color": null,
    "emoji_discord_link": "https://cdn.discordapp.com/emojis/",
    "emoji_extension": ".png",
    "ascII_file_name": "./ascII.txt",
    "administrator_permission": "ADMINISTRATOR",
    "about_prefix": "abt_",
    "describtion_prefix": "dsc_",
    "avatar_channel_id": "883729587673120818",
    "owner_id": "473817390887600129",
    "support_server_id": "822097415783055431",
    "commands": {
        "getHentai": ["gethentai", "nhentai"],
        "rule34": ["rule34", "r34"],
        "imgToAscII": ["imgtoascii", "ita"],
        "setEmoji": ["setemoji"],
        "deleteEmoji": ["delemoji"],
        "setLanguage": ["setlang", "lang", "setlanguage"],
        "setPrefix": ["setprefix"],
        "doEmojis": ["doemojis"],
        "clear": ["clear", "cls"],
        "help": ["help", "h"]
    },
    "events": {
        "ready": "ready",
        "message": "messageCreate",
        "guildCreate": "guildCreate",
        "guildDelete": "guildDelete"
    },
    "log": {
        "ready": "bot started",
        "avatar_error": "Can't change avatar: "
    },
    "status": ["on ", " servers with ", " users"],
    "img_to_ascii_defaults": {
        "fit": "box",
        "width": 150,
        "height": 75,
        "color": false
    },
    "img_to_ascii_settings": {
        "width": "width:",
        "height": "height:"
    },
    "db_settings": {
        "db_collections": {
            "users": "users",
            "servers": "servers",
            "avatars": "avatars"
        },
        "default_values": [
            {
                "userID": "235088799074484224", //Rythm
                "emojiID": "822395665660379186",
                "language": "eng"
            },
            {
                "userID": "252128902418268161", //Rythm#2
                "emojiID": "822845799738245130",
                "language": "eng"
            },
            {
                "userID": "159985870458322944", //MEE6
                "emojiID": "872923821701726230",
                "language": "eng"
            },
            {
                "userID": "883020186339397693", //ME
                "emojiID": null,
                "language": "eng"
            },
            {
                "userID": "883051590959894538", //TEST
                "emojiID": null,
                "language": "eng"
            },
            {
                "userID": "884799443621281875", //tracker
                "emojiID": "884826873236947014",
                "language": "eng"
            }
        ],
        "log": {
            "db": "database connected",
            "db_error": "database error: "
        }
    },
    "localization": {
        "eng": {
            "msg_getHentai_nhentai": "NHENTAI",
            "msg_getHentai_intro": "Enjoy the masterpiece:",
            "msg_getHentai_tags": "Tags:",
            "msg_getHentai_id_warn": "Wrong ID",
			"msg_getHentai_nsfw_warn": "Hentai is avaliable only at nsfw channels :sob:",
            "msg_getHentai_fetch_error": "An error was occurred. May be its a sign?",
            "msg_rule34_fetch_error": "rule34.xxx is not responding UwU",
            "msg_rule34_tag_error": "Pass at least one tag",
            "msg_rule34_hentai_not_found": "No results were found for your search",
            "msg_ruel34_nsfw_error": "Hentai is only available on nsfw channels",
            "msg_imgToAscII_error": "Error while processing an image UwU",
            "msg_imgToAscII_no_files": "There are no files in your message ¯\\_(ツ)_/¯",
            "msg_imgToAscII_wrong_file": "File not found",
            "msg_clear_error": "What error could possibly happen while deleting messages???",
            "emd_help_author": "Some help:",
			"msg_doEmojis_on": "Emojis enabled!:white_check_mark:",
			"msg_doEmojis_off": "Emojist disabled!:negative_squared_cross_mark:",
            "msg_doEmojis_args_warn": "State on or off",
			"msg_doEmojis_access_warn": "This command is only avaliable for administrators :confused:",
            "msg_doEmojis_db_error": "We have some troubles with data base",
			"msg_setPrefix_success": "New prefix: ",
			"msg_setPrefix_access_warn": "This command is only avaliable for administrators :confused:",
            "msg_setPrefix_empty_warn": "Prefix can't be empty",
            "msg_setPrefix_db_error": "We have some troubles with data base",
            "msg_deleteEmoji_success": "Reaction deleted",
            "msg_deleteEmoji_db_error": "We have some troubles with data base",
            "msg_setEmoji_updated": "Reaction Updated",
            "msg_setEmoji_error": "Wrong emoji >:(",
            "msg_setEmoji_db_error": "We have some troubles with data base",
            "msg_setEmoji_same_emoji": "You aleready have this emoji. May be emoji function turned off on this server?",
			"msg_setLanguage_success": "Ok masta, my new language: ",
            "msg_setLanguage_warn": "Bot isn't translated to this language (yet?)",
            "msg_setLanguage_empty": "Empty language?",
            "msg_setLanguage_db_error": "We have some troubles with data base",
			"abt_setlang": "Set language [rus, eng]",
			"abt_setemoji": "Chose the message reaction",
			"abt_delemoji": "Remove the message reaction",
			"abt_doemojis": "Enable and disable bot reactions on the server (admins only)",
			"abt_setprefix": "Set prefix, I suppose",
			"abt_gethentai": "Wanna read hentai in any(nsfw) channel? No problem (^_~)",
			"abt_rule34": "Hentai again",
			"abt_imgtoascii": "Convert an image to the text file",
            "abt_clear": "Deletes bot messages from this channel",
			"abt_help": "Help",
			"dsc_setlang": "We'll have more languages in future",
			"dsc_setemoji": "State emoji after command. You can use default emojis and emojis from servers with this bot",
			"dsc_delemoji": "Delete reaction under your message",
			"dsc_doemojis": "on - switch on, off - switch off",
			"dsc_setprefix": "p.s. only for admins",
			"dsc_gethentai": "Find doujin from nhentai using 6 digit code",
			"dsc_rule34": "Find images from rule34.xxx using tags",
			"dsc_imgtoascii": "Convert image to ascII text",
            "dsc_clear": "You can state amount of messages to delete",
			"dsc_help": "Shows this message"
        },
        "rus": {
            "msg_getHentai_nhentai": "NHENTAI",
            "msg_getHentai_intro": "Наслаждаемся произведением:",
            "msg_getHentai_tags": "Теги:",
            "msg_getHentai_id_warn": "Неверный код",
			"msg_getHentai_nsfw_warn": "Хентай доступен только в nsfw каналах :sob:",
            "msg_getHentai_fetch_error": "Произошла ошибка. Может это знак?",
            "msg_rule34_fetch_error": "rule34.xxx не отвечает UwU",
            "msg_rule34_tag_error": "Передайте хотя бы один тег",
            "msg_rule34_hentai_not_found": "По вашему запросу ничего не найдено",
            "msg_ruel34_nsfw_error": "Хентай доступен только в nsfw каналах",
            "msg_clear_error": "Какая ошибка могла случится во время удаления сообщений?",
            "msg_imgToAscII_error": "Не удалось сохранить файл UwU",
            "msg_imgToAscII_no_files": "В сообщении нет вложений ¯\\_(ツ)_/¯",
            "msg_imgToAscII_wrong_file": "Файл не найден",
            "emd_help_author": "Список команд:",
			"msg_doEmojis_on": "Эмодзи включены!:white_check_mark:",
			"msg_doEmojis_off": "Эмодзи выключены!:negative_squared_cross_mark:",
            "msg_doEmojis_args_warn": "Передайте on или off",
			"msg_doEmojis_access_warn": "Эта команда доступна только администраторам :confused:",
            "msg_doEmojis_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
			"msg_setPrefix_success": "Новый префикс: ",
			"msg_setPrefix_access_warn": "Эта команда доступна только администраторам :confused:",
            "msg_setPrefix_empty_warn": "Префикс не может быть пустым",
            "msg_setPrefix_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_deleteEmoji_success": "Реакция удалена",
            "msg_deleteEmoji_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_setEmoji_updated": "Reaction Updated",
            "msg_setEmoji_error": "Это не эмодзи >:(",
            "msg_setEmoji_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_setEmoji_same_emoji": "Эта реакция уже установлена. Может быть эмоджи выключены на этом сервере?",
			"msg_setLanguage_success": "Ок, мой новый язык: ",
            "msg_setLanguage_warn": "Бот ещё не переведён на этот язык :sob:",
            "msg_setLanguage_empty": "Пустой язык?",
            "msg_setLanguage_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
			"abt_setlang": "Устаноаить язык [rus, eng]",
			"abt_setemoji": "Выберите реакцию под сообщением",
			"abt_delemoji": "Убрать реакцию под сообщениями",
			"abt_doemojis": "Включить и выключить реакции от бота на сервере",
			"abt_setprefix": "Изменить префикс на сервере",
			"abt_gethentai": "Хотите читать хентай в любимом чате? Без проблем (^_~)",
			"abt_rule34": "И тут порно",
			"abt_imgtoascii": "Конвертировать картинку в текстовый файл",
            "abt_clear": "Удаляет сообщения бота из этого канала",
			"abt_help": "Помощь",
			"dsc_setlang": "В аргументе код языка, в будующем бот будет переводиться на большее количество языков.",
			"dsc_setemoji": "Напишите команду и через пробел эмоджи для реакции под сообщением (если функция включена на сервере). Можно использовать дефолтные и эмоджи с серверов, на которых есть этот бот",
			"dsc_delemoji": "Убрать реакцию под сообщениями",
			"dsc_doemojis": "on - вкл. off - выкл.",
			"dsc_setprefix": "Такое могут только админы",
			"dsc_gethentai": "Найти мангу с nhentai по коду",
			"dsc_rule34": "Найти картинки с rule34.xxx по тегам",
			"dsc_imgtoascii": "Конвертировать картинку в текстовый файл",
            "dsc_clear": "Можно указать количество сообщений, которое нужно удалить",
			"dsc_help": "Показывает это сообщение"
        }
    }
}